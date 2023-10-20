import defaultUser from '../assets/default-user.png';
import { Button } from '../components';
import { useUser } from '../hooks/useUser';

export default function ProfilePage() {
  const { user } = useUser();
  return (
    <section className="pt-40 padding-x grid grid-cols-3 gap-10 pb-8 md:pb-16">
      <img className="w-60 h-60" src={defaultUser} alt="user" />
      <div className="col-span-2">
        <div className="mb-6">
          <label className="block mb-2 text-xl font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="outline-none py-2 px-3 w-3/4 bg-gray-50"
            defaultValue={user?.name}
            name="name"
            type="text"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-xl font-semibold" htmlFor="email">
            Email Address
          </label>
          <input
            className="outline-none py-2 px-3 w-3/4 bg-gray-50"
            defaultValue={user?.email}
            name="email"
            type="email"
          />
        </div>
        <Button className="">Update details</Button>
      </div>
    </section>
  );
}
