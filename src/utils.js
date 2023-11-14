const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImNhNmY1NmIwLTMwZWUtNGUxZS1iM2MxLWRhMDI3YmU2MTdlMiIsIm9yZ0lkIjoiMzY0NDYyIiwidXNlcklkIjoiMzc0NTc0IiwidHlwZUlkIjoiNTk4YTFmYTctYTU3Yi00YmU3LWIwM2EtODFhYjc2MzM5YWNjIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTk5OTYzNDIsImV4cCI6NDg1NTc1NjM0Mn0.XtJ5Jd4J9yL0dPxz1LTIbUC2qPC43j3Xnbh3IqG6I1k";

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTransfers = async (tokenAddress, tokenId) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
  );
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
