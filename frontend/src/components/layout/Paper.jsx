function Paper({ title, children }) {
  return (
    <div className="card bg-base-100 min-h-full text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Paper;
