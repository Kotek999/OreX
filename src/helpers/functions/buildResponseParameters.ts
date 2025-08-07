export const buildResponseParameters = async <T extends Record<string, any>>(
  url: string,
  params: Record<string, string> = {}
): Promise<T> => {
  try {
    const queryParams: string = new URLSearchParams(params).toString();
    const finalUrl: string = `${url}?${queryParams}`;
    const response: Response = await fetch(finalUrl);

    if (!response.ok) {
      throw new Error(`Nie udało się pobrać danych z ${finalUrl}`);
    }

    return response.json();
  } catch (err) {
    throw new Error(
      `Nie udało się pobrać danych: ${
        err instanceof Error ? err.message : "Nieznany błąd"
      }`
    );
  }
};
