import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();

  return (
    <div>
      <h1>📄 Post Detail</h1>
      <p>You are reading post ID: {postId}</p>
    </div>
  );
}
