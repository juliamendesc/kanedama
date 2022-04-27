import useSWR from 'swr';

export type Fetcher<T> = {
  data: T | undefined;
  error: Error | undefined;
};

export default function useFetcher<T>(url: string) {
  const { data, error } = useSWR<T, Error>(url, async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });

  return { data, error };
}
