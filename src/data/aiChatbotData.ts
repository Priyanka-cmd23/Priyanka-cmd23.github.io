export const mockChats = [
  {
    id: 1,
    title: "Welcome to AI Chat",
    timestamp: "2026-01-15T10:30:00Z",
    messages: [
      {
        id: 1,
        role: "user",
        content: "Hello! What can you help me with?",
        timestamp: "2026-01-15T10:30:00Z"
      },
      {
        id: 2,
        role: "assistant",
        content: "Hello! I'm an AI assistant powered by Groq AI. I can help you with a wide range of topics including answering questions, providing information, creative writing, problem-solving, and much more. I can also fetch relevant images for you using Unsplash. What would you like to explore today?",
        timestamp: "2026-01-15T10:30:05Z",
        images: [
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
          "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&q=80",
          "https://images.unsplash.com/photo-1675271591413-47b0a63d9c25?w=800&q=80"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Nature Photography",
    timestamp: "2026-01-14T15:20:00Z",
    messages: [
      {
        id: 1,
        role: "user",
        content: "Show me beautiful nature scenes",
        timestamp: "2026-01-14T15:20:00Z"
      },
      {
        id: 2,
        role: "assistant",
        content: "Here are some breathtaking nature scenes that showcase the beauty of our natural world. From majestic mountains to serene forests, these images capture the essence of nature's magnificence.",
        timestamp: "2026-01-14T15:20:03Z",
        images: [
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
          "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80",
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Technology Trends",
    timestamp: "2026-01-13T09:45:00Z",
    messages: [
      {
        id: 1,
        role: "user",
        content: "Tell me about artificial intelligence trends",
        timestamp: "2026-01-13T09:45:00Z"
      },
      {
        id: 2,
        role: "assistant",
        content: "Artificial Intelligence is rapidly evolving! Key trends include: 1) Large Language Models becoming more efficient and accessible, 2) AI integration in everyday applications, 3) Enhanced computer vision capabilities, 4) Ethical AI development focusing on responsible use, and 5) Edge AI bringing intelligence to devices. The field is moving toward more sustainable, accessible, and powerful AI solutions.",
        timestamp: "2026-01-13T09:45:06Z",
        images: [
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
        ]
      }
    ]
  }
];

export const mockSuggestions = [
  "What's the weather like today?",
  "Tell me a creative story",
  "Explain quantum computing",
  "Show me inspiring quotes",
  "Help me with coding",
  "Suggest a recipe for dinner"
];

export const getMockImages = (query: string) => {
  const imageCollections: Record<string, string[]> = {
    nature: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80"
    ],
    technology: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
    ],
    default: [
      "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&q=80",
      "https://images.unsplash.com/photo-1675271591413-47b0a63d9c25?w=800&q=80"
    ]
  };

  if (query.toLowerCase().includes('nature')) return imageCollections.nature;
  if (query.toLowerCase().includes('tech')) return imageCollections.technology;
  return imageCollections.default;
};
