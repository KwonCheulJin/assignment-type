import { useRef, useEffect } from "react";

const LodingIndicator = ({ loading, setListLimit, setAdsLimit }) => {

  if (typeof loading !== 'boolean') {
    throw new Error('loading boolean 전달되지 않았습니다.')
  }
  const fetchMoreTrigger = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) {
      setAdsLimit((prev) => prev + 1);
      setListLimit((prev) => prev + 1);
    }
  });

  useEffect(() => {
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    return () => {
      fetchMoreObserver.unobserve(fetchMoreTrigger.current);
    };
  }, []);

  return (
    <div className={loading ? "loading" : ""} ref={fetchMoreTrigger}></div>
  )
}

export default LodingIndicator
