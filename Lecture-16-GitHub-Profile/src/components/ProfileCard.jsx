// ProfileCard.jsx
import React, { useEffect, useState } from 'react';
import { 
  FaGithub, 
  FaMapMarkerAlt, 
  FaLink, 
  FaTwitter,
  FaBuilding,
  FaUsers,
  FaStar,
  FaCodeBranch,
  FaEnvelope
} from 'react-icons/fa';
import { MdCalendarToday } from 'react-icons/md';

const ProfileCard = ({userData}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with GitHub logo */}
        <div className="flex items-center justify-center mb-8">
          <FaGithub className="text-4xl text-white mr-3" />
          <h1 className="text-3xl font-bold text-white">GitHub Profile</h1>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          {/* Profile header section */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img 
                  src={userData.avatar_url} 
                  alt={userData.name}
                  className="w-40 h-40 rounded-2xl border-4 border-blue-500 shadow-lg"
                />
              </div>
              
              {/* User info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{userData.name}</h1>
                    <p className="text-xl text-gray-300">@{userData.login}</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Follow
                  </button>
                </div>
                
                {/* Bio */}
                <p className="text-gray-300 mb-6 leading-relaxed">{userData.bio}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-900 rounded-xl p-4 text-center hover:bg-gray-850 transition-colors">
                    <FaUsers className="inline-block text-blue-400 text-xl mb-2" />
                    <div className="text-2xl font-bold text-white">{userData.followers}</div>
                    <div className="text-gray-400 text-sm">Followers</div>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4 text-center hover:bg-gray-850 transition-colors">
                    <FaUsers className="inline-block text-green-400 text-xl mb-2" />
                    <div className="text-2xl font-bold text-white">{userData.following}</div>
                    <div className="text-gray-400 text-sm">Following</div>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4 text-center hover:bg-gray-850 transition-colors">
                    <FaCodeBranch className="inline-block text-purple-400 text-xl mb-2" />
                    <div className="text-2xl font-bold text-white">{userData.public_repos}</div>
                    <div className="text-gray-400 text-sm">Repositories</div>
                  </div>
                  {/* <div className="bg-gray-900 rounded-xl p-4 text-center hover:bg-gray-850 transition-colors">
                    <FaStar className="inline-block text-yellow-400 text-xl mb-2" />
                    <div className="text-2xl font-bold text-white">{userData.stars}</div>
                    <div className="text-gray-400 text-sm">Stars</div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Details section */}
          <div className="bg-gray-900 p-8 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <FaMapMarkerAlt className="mr-3 text-lg text-gray-400" />
                  <span>{userData.location}</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <FaLink className="mr-3 text-lg text-gray-400" />
                  <a href={userData.website} className="hover:text-blue-400 transition-colors">
                    {userData.website}
                  </a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <FaTwitter className="mr-3 text-lg text-gray-400" />
                  <a href={`https://twitter.com/${userData.twitter}`} className="hover:text-blue-400 transition-colors">
                    {userData.twitter}
                  </a>
                </div>
              </div>
              
              {/* Right column */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <FaBuilding className="mr-3 text-lg text-gray-400" />
                  <span>{userData.company}</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <MdCalendarToday className="mr-3 text-lg text-gray-400" />
                  <span>Joined {userData.created_at}</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <FaEnvelope className="mr-3 text-lg text-gray-400" />
                  <a href={`mailto:${userData.username}@github.com`} className="hover:text-blue-400 transition-colors">
                    Send email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub button */}
          <div className="p-6 bg-gray-950 border-t border-gray-800 text-center">
            <a 
              href={`https://github.com/${userData.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 group"
            >
              <FaGithub className="mr-3 text-xl group-hover:scale-110 transition-transform" />
              View on GitHub
            </a>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            This is a sample GitHub profile card UI. Replace with actual user data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;