import { API_URL } from "../app/(home)/page";

// 무비 정보 전체를 가져오는 함수
async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
