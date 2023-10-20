import { useNavigate } from 'react-router-dom';
import { Button } from '../components';

export default function UnauthorizePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <p className="mb-4">You are not authorized to access this page!</p>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}
