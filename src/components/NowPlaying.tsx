"use client"

import { useEffect, useState } from 'react';

interface Track {
  name: string;
  artist: {
    '#text': string;
  };
  image: Array<{
    '#text': string;
    size: string;
  }>;
  '@attr'?: {
    nowplaying: boolean;
  };
}

interface LastFMResponse {
  recenttracks: {
    track: Track[];
  };
}

const NowPlaying = () => {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const apiKey = "9cc59f83c310fd0f984fd1c78fd2f3e1";
      const username = "VAVRIL";

      if (!apiKey || !username) {
        throw new Error('Missing API key or username');
      }

      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: LastFMResponse = await response.json();

        const nowPlayingTrack = data.recenttracks?.track?.find(
          (track: Track) => track['@attr']?.nowplaying
        );

        setSong(nowPlayingTrack || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000); // will fetch every 10 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="text-gray-400">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-3 rounded-lg bg-opacity-10 backdrop-blur-sm">
      {song ? (
        <div className="flex items-center space-x-4">
          <img 
            src={song.image[1]['#text'] || '/default-album.png'} 
            alt={song.name}
            className="w-10 h-10"
          />
          
          <div className=' flex flex-col '>
           <p className="text-gray-400 text-sm ">{song.artist['#text']}</p>
            <p className="text-white">{song.name}</p>
            
          </div>
        </div>
      ) : (
        <p className="text-gray-400">No song currently playing</p>
      )}
    </div>
  );
};

export default NowPlaying;
