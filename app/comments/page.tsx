import type { Metadata } from 'next'
import CommentSection from '../components/CommentSection'

export const metadata: Metadata = {
  title: 'Comments - Basketball Stars Reviews',
  description: 'Read what players are saying about Basketball Stars Unblocked games. Join the discussion and share your experience!',
}

export default function CommentsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Player Comments</h1>
      <CommentSection />
    </div>
  )
} 