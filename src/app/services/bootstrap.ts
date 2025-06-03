"use server";



export const initiateBootstrapping = async (targetIndex: string) => {
    const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${process.env.PORT}`;

    const response = await fetch(`${baseUrl}/api/ingest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ targetIndex }),
      });
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
    
};

export const handleBootstrapping = async (targetIndex: string) => {
    try{

        console.log(
            `Running bootstrapping procedure against Pinecone index: ${targetIndex}`
          );

          //await createIndexIfNecessary(targetIndex);
          //const hasVectors = await pineconeIndexHasVectors(targetIndex);
      

    }catch (error) {
        console.error("Error during bootstrapping:", error);
        throw error;
    }
}