import Link from 'next/link';

interface Comment {
  author: string;
  date: string;
  content: string;
  authorLink?: string;
}

export default function CommentSection() {
  const comments: Comment[] = [
    {
      author: "Basketball Stars",
      date: "November 9, 2022 at 10:21 pm",
      content: "Looking at all of these recipes makes me hungry. Regardless, thank you so much for sharing",
      authorLink: "/games/basketball-stars"
    }
  ];

  return (
    <div className="space-y-6 mt-8">
      <h2 className="text-2xl font-bold">Comments</h2>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 mb-2">
              {comment.authorLink ? (
                <Link href={comment.authorLink} className="font-medium text-blue-600 hover:text-blue-800 transition-colors">
                  {comment.author}
                </Link>
              ) : (
                <span className="font-medium">{comment.author}</span>
              )}
              <span className="text-gray-500 text-sm">says</span>
            </div>
            <div className="text-gray-500 text-sm mb-2">{comment.date}</div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 