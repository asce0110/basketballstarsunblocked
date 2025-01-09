'use client';

import { FaFacebookF, FaTwitter, FaWhatsapp, FaRedditAlien } from 'react-icons/fa';

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare = ({ url, title }: SocialShareProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: FaFacebookF,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-[#1877f2] hover:bg-[#0d65d9]'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'bg-[#1da1f2] hover:bg-[#0c85d0]'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      color: 'bg-[#25d366] hover:bg-[#1da851]'
    },
    {
      name: 'Reddit',
      icon: FaRedditAlien,
      url: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      color: 'bg-[#ff4500] hover:bg-[#e03d00]'
    }
  ];

  const handleShare = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm text-gray-600 mr-2">Share:</span>
      {shareLinks.map((platform) => {
        const Icon = platform.icon;
        return (
          <button
            key={platform.name}
            onClick={() => handleShare(platform.url)}
            className={`${platform.color} text-white p-2 rounded-full transition-colors duration-200 flex items-center justify-center w-8 h-8`}
            aria-label={`Share on ${platform.name}`}
          >
            <Icon className="w-4 h-4" />
          </button>
        );
      })}
    </div>
  );
};

export default SocialShare; 