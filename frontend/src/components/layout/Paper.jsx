function Paper({ title, children }) {
  return (
    <div class="flex items-center justify-center shadow-xl p-8 rounded-xl bg-base-200">
      <div class="flex flex-col">
        <div class="flex flex-col">
          <div class="container px-4">
            <div class="flex flex-wrap justify-center text-center mb-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paper;
