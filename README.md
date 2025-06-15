#  LexSearch – AI-Powered Legal Semantic Search

LexSearch is a robust full-stack application designed to enable **natural language semantic search over legal case documents (PDFs)**. By combining modern tools such as **Pinecone**, **LangChain**, and **Voyage AI's domain-specific embeddings**, LexSearch builds a custom legal knowledge base powered by vector similarity search.

---

##  Overview

Legal professionals often face challenges searching through vast repositories of case law. LexSearch tackles this by enabling intuitive, semantic querying of legal texts, going beyond keyword matching to understand context and meaning. This project serves as both a practical tool and a learning resource demonstrating how to:

- Process and chunk legal PDFs using LangChain  
- Generate domain-specific embeddings via Voyage AI  
- Store and query embeddings efficiently in a Pinecone vector database  
- Build a responsive user interface using Next.js and Tailwind CSS

---

##  Features

- **Automatic knowledge base creation** by parsing and embedding PDF documents  
- **Semantic search** optimized for legal language and case retrieval  
- **Rich metadata support** to enhance context and filtering  
- **Smart UI with suggested queries and fast results**  
- **Simple deployment** options for local or cloud hosting  

---

##  Technology Stack

| Technology      | Role                                   |
|-----------------|---------------------------------------|
| **Next.js**     | Full-stack React framework             |
| **Node.js (20+)** | Backend server and API logic           |
| **LangChain**   | Document parsing, chunking, and processing |
| **Pinecone**    | Vector database for scalable similarity search |
| **Voyage AI**   | Domain-specific embedding generation   |
| **Tailwind CSS**| Responsive and customizable UI styling |

---

##  How It Works

1. **PDF ingestion:** Legal PDFs are parsed and broken into semantically meaningful chunks using LangChain.  
2. **Embedding generation:** Each chunk is converted to a dense vector using Voyage AI’s specialized embeddings for legal text.  
3. **Vector indexing:** The vectors, along with metadata, are stored in Pinecone for efficient similarity search.  
4. **Semantic search:** User queries are embedded and matched against the Pinecone index to retrieve relevant legal case excerpts.  
5. **Interactive UI:** Search results are displayed with contextual highlights and metadata for quick review.

---

##  Getting Started

### Prerequisites

- Node.js v20 or higher  
- Pinecone API key  
- Voyage AI API credentials  
- Git and package manager (npm or yarn)

### Setup

1. Clone the repository  
   ```bash
   git clone <your-repository-url>
   cd <repository-folder>

2. Install dependencies
    ```bash
    npm install
    # or
    yarn install

3. Configure environment variables in .env.local:
    ```ini
    PINECONE_API_KEY=your_pinecone_api_key
    PINECONE_ENVIRONMENT=your_pinecone_environment
    VOYAGE_API_KEY=your_voyage_api_key

4. Add your legal PDFs to the /documents folder (or configured location).

5. Run the knowledge base bootstrap script to parse, embed, and index   documents.

6. Start the development server:
    ```bash
    npm run dev

7. Open http://localhost:3000 in your browser and start searching!

##  Project Structure

- `/pages` — Next.js pages and API routes  
- `/components` — React UI components  
- `/lib` — Utility functions for Pinecone, LangChain, and embeddings  
- `/scripts` — Scripts for PDF ingestion and indexing  
- `/public` — Static assets  
- `/documents` — Place your legal PDFs here  

---

##  References

- [Pinecone Documentation](https://docs.pinecone.io/)  
- [LangChain Documentation](https://langchain.com/docs/)  
- [Voyage AI Embeddings](https://dash.voyageai.com/)  
- [Next.js Documentation](https://nextjs.org/docs)  
- [Tailwind CSS](https://tailwindcss.com/docs)  

---

##  Future Enhancements

- Support for additional document formats (Word, HTML)  
- Enhanced filtering by legal topic or jurisdiction  
- User authentication and personalized search histories  
- Real-time collaboration features  

---

### Happy coding and happy searching! 
