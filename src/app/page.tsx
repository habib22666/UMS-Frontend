import { redirect } from 'next/navigation';

function HomePage() {
  return redirect('/profile');
}

export default HomePage;
