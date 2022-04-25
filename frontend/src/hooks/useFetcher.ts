import useSWR from 'swr';

export function useFetcher(url: string) {
  const { data, error, isValidating } = useSWR(url, async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });

  return { data, error, isValidating };
}
