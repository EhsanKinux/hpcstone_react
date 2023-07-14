import Circle from "../../../components/Circle";
import { users } from "../../../data/users";

const Testimonials = () => {
  return (
    <div className="min-h-screen relative overflow-hidden mt-6 flex flex-col justify-around items-center mb-24 rtl text-justify">
      <Circle
        backgroundColor="darkblue"
        top="-60vh"
        left="0"
        right="0"
        margin="auto"
        width="100vh"
        height="100vh"
      />
      <h1 className="text-center font-bold text-4xl">تیم مشاور و پشتیبانی</h1>
      <div className="wrapper flex flex-wrap gap-6 justify-center items-center">
        {users.map((user) => (
          <div
            key={user.id}
            className="card w-1/4 glassEffect p-5 shadow-md shadow-slate-300"
          >
            <img src={user.logo} width="30" height="30" alt="" />
            <p className="comment text-xl font-light">{user.comment}</p>
            <div className="person flex items-center">
              <img
                className="avatar rounded-full"
                src={user.avatar}
                width="45"
                height="45"
                alt=""
              />
              <div className="info flex flex-col ml-5">
                <span className="username font-bold text-gray-600">
                  {user.name}
                </span>
                <span className="jobTitle"> {user.title} </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
