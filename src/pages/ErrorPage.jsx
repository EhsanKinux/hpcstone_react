import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center gap-4 h-screen"
    >
      <h1 className="text-red-500 font-bold text-3xl">Oops!</h1>
      <p className="text-slate-800 font-bold text-xl">
        Sorry, an unexpected error has accurred
      </p>
      <p>
        <i className="text-slate-700 text-lg">
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
