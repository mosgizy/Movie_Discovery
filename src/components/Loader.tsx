'use client';

const Loader = () => {
  return (
    <section
      className={`min-h-screen w-full flex-center justify-center fixed inset-0 z-50 bg-white`}
    >
      <div className="flex-center flex-col gap-6">
        <div className="loader"></div>
      </div>
    </section>
  );
};

export default Loader;
