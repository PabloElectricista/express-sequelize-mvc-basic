const handleHTTP = (res, error) => {
  res.status(500);
  res.json({ error });
};

export { handleHTTP };
