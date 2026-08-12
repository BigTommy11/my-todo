import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold">Hello, Next.js</h1>
        <p className="mt-2 text-sm text-gray-600">Pages Router で動作確認中</p>
      </div>
    </main>
  );
};

export default Home;
