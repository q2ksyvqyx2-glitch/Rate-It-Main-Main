import React, { useState } from "react";

const categories = [
  "Football",
  "Gaming",
  "Fashion",
  "Cars",
  "Food",
  "Design",
  "Music",
  "Technology",
];

const starterPosts = [
  {
    id: 1,
    title: "Rate my football kit",
    category: "Football",
    username: "footballfan",
    image: "https://picsum.photos/600/900?random=1",
    description: "What do you think of this kit?",
    ratings: [],
    likes: 12,
  },
  {
    id: 2,
    title: "New gaming setup",
    category: "Gaming",
    username: "setupking",
    image: "https://picsum.photos/600/900?random=2",
    description: "Rate the setup out of 10!",
    ratings: [],
    likes: 25,
  },
  {
    id: 3,
    title: "New trainers",
    category: "Fashion",
    username: "sneakerhead",
    image: "https://picsum.photos/600/900?random=3",
    description: "Are these worth buying?",
    ratings: [],
    likes: 18,
  },
];

function getAverage(ratings) {
  if (!ratings.length) return "0.0";

  const total = ratings.reduce((sum, rating) => sum + rating, 0);
  return (total / ratings.length).toFixed(1);
}

export default function App() {
  const [page, setPage] = useState("home");
  const [posts, setPosts] = useState(starterPosts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedPosts, setLikedPosts] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCategory, setNewCategory] = useState("Football");
  const [newImage, setNewImage] = useState("");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  function ratePost(postId, rating) {
    setPosts((currentPosts) =>
      currentPosts.map((post) => {
        if (post.id !== postId) return post;

        return {
          ...post,
          ratings: [...post.ratings, rating],
        };
      })
    );
  }

  function toggleLike(postId) {
    setLikedPosts((current) =>
      current.includes(postId)
        ? current.filter((id) => id !== postId)
        : [...current, postId]
    );
  }

  function createPost() {
    if (!newTitle.trim()) return;

    const newPost = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
      username: "you",
      image:
        newImage.trim() ||
        `https://picsum.photos/600/900?random=${Date.now()}`,
      description: newDescription,
      ratings: [],
      likes: 0,
    };

    setPosts((current) => [newPost, ...current]);

    setNewTitle("");
    setNewDescription("");
    setNewImage("");
    setPage("home");
  }

  const background = darkMode ? "#000" : "#f5f5f5";
  const card = darkMode ? "#151515" : "#fff";
  const text = darkMode ? "#fff" : "#111";
  const muted = darkMode ? "#999" : "#666";

  return (
    <div
      style={{
        minHeight: "100vh",
        background,
        color: text,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: darkMode ? "#000" : "#fff",
          borderBottom: "1px solid #333",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 26,
            fontWeight: 900,
            background: "linear-gradient(90deg,#25f4ee,#fe2c55)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          RateIt
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: card,
            color: text,
            border: "1px solid #444",
            borderRadius: 20,
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      <main
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "20px 15px 100px",
        }}
      >
        {page === "home" && (
          <>
            <h2 style={{ marginTop: 0 }}>For You</h2>

            <div
              style={{
                display: "flex",
                gap: 8,
                overflowX: "auto",
                paddingBottom: 15,
              }}
            >
              {["All", ...categories].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    whiteSpace: "nowrap",
                    border: "none",
                    borderRadius: 20,
                    padding: "9px 15px",
                    background:
                      selectedCategory === category ? "#fe2c55" : card,
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {filteredPosts.map((post) => {
                const average = getAverage(post.ratings);
                const liked = likedPosts.includes(post.id);

                return (
                  <article
                    key={post.id}
                    style={{
                      background: card,
                      borderRadius: 18,
                      overflow: "hidden",
                      border: "1px solid #292929",
                    }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: 430,
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    <div style={{ padding: 16 }}>
                      <div
                        style={{
                          color: "#25f4ee",
                          fontSize: 12,
                          fontWeight: 800,
                          marginBottom: 6,
                        }}
                      >
                        {post.category.toUpperCase()}
                      </div>

                      <h2 style={{ margin: "0 0 5px" }}>{post.title}</h2>

                      <p style={{ color: muted, marginTop: 5 }}>
                        @{post.username}
                      </p>

                      <p style={{ color: muted }}>{post.description}</p>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          margin: "15px 0",
                          padding: 12,
                          borderRadius: 12,
                          background: darkMode ? "#0c0c0c" : "#eee",
                        }}
                      >
                        <div>
                          <div style={{ fontSize: 11, color: muted }}>
                            AVERAGE RATING
                          </div>

                          <strong
                            style={{
                              fontSize: 28,
                              color: "#25f4ee",
                            }}
                          >
                            {average}/10
                          </strong>
                        </div>

                        <div style={{ color: muted }}>
                          {post.ratings.length} ratings
                        </div>
                      </div>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(5, 1fr)",
                          gap: 7,
                        }}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                          <button
                            key={number}
                            onClick={() => ratePost(post.id, number)}
                            style={{
                              border: "1px solid #444",
                              background:
                                darkMode ? "#202020" : "#eee",
                              color: text,
                              borderRadius: 10,
                              padding: "12px 5px",
                              fontWeight: 800,
                              cursor: "pointer",
                            }}
                          >
                            {number}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => toggleLike(post.id)}
                        style={{
                          marginTop: 15,
                          background: "transparent",
                          border: "none",
                          color: liked ? "#fe2c55" : muted,
                          fontSize: 16,
                          cursor: "pointer",
                        }}
                      >
                        {liked ? "❤️" : "🤍"}{" "}
                        {post.likes + (liked ? 1 : 0)}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}

        {page === "explore" && (
          <>
            <h2>Explore</h2>

            <p style={{ color: muted }}>
              Discover the highest rated posts and trending content.
            </p>

            {[...posts]
              .sort(
                (a, b) =>
                  Number(getAverage(b.ratings)) -
                  Number(getAverage(a.ratings))
              )
              .map((post) => (
                <div
                  key={post.id}
                  style={{
                    background: card,
                    borderRadius: 15,
                    padding: 12,
                    marginBottom: 10,
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                  }}
                >
                  <img
                    src={post.image}
                    alt=""
                    style={{
                      width: 70,
                      height: 90,
                      objectFit: "cover",
                      borderRadius: 10,
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <strong>{post.title}</strong>
                    <div style={{ color: muted, fontSize: 13 }}>
                      {post.category}
                    </div>
                  </div>

                  <strong style={{ color: "#25f4ee" }}>
                    {getAverage(post.ratings)}
                  </strong>
                </div>
              ))}
          </>
        )}

        {page === "create" && (
          <>
            <h2>Create a post</h2>

            <div
              style={{
                background: card,
                padding: 18,
                borderRadius: 18,
              }}
            >
              <label>Title</label>

              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="What do you want people to rate?"
                style={inputStyle(text, darkMode)}
              />

              <label>Category</label>

              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                style={inputStyle(text, darkMode)}
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>

              <label>Description</label>

              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Tell people about your post..."
                rows={4}
                style={inputStyle(text, darkMode)}
              />

              <label>Image URL</label>

              <input
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
                placeholder="Paste an image URL"
                style={inputStyle(text, darkMode)}
              />

              <button
                onClick={createPost}
                style={{
                  width: "100%",
                  padding: 14,
                  borderRadius: 30,
                  border: "none",
                  background: "linear-gradient(90deg,#25f4ee,#fe2c55)",
                  color: "#000",
                  fontWeight: 900,
                  cursor: "pointer",
                  marginTop: 10,
                }}
              >
                Publish Post
              </button>
            </div>
          </>
        )}

        {page === "notifications" && (
          <>
            <h2>Notifications</h2>

            {[
              "🔥 Your post is trending",
              "⭐ Someone rated your post 9/10",
              "❤️ Someone liked your post",
              "👤 Someone followed you",
            ].map((notification, index) => (
              <div
                key={index}
                style={{
                  background: card,
                  padding: 16,
                  borderRadius: 14,
                  marginBottom: 8,
                }}
              >
                {notification}
              </div>
            ))}
          </>
        )}

        {page === "profile" && (
          <>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#25f4ee,#fe2c55)",
                  margin: "10px auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 40,
                }}
              >
                👤
              </div>

              <h2>@you</h2>

              <p style={{ color: muted }}>
                Rating everything, judging nothing.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 8,
              }}
            >
              <Stat title="Posts" value={posts.filter((p) => p.username === "you").length} />
              <Stat
                title="Ratings"
                value={posts.reduce(
                  (sum, post) => sum + post.ratings.length,
                  0
                )}
              />
              <Stat title="Followers" value="142" />
            </div>
          </>
        )}
      </main>

      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: darkMode ? "#090909" : "#fff",
          borderTop: "1px solid #333",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 5px 18px",
          zIndex: 20,
        }}
      >
        <NavButton icon="🏠" text="Home" active={page === "home"} onClick={() => setPage("home")} />
        <NavButton icon="🔎" text="Explore" active={page === "explore"} onClick={() => setPage("explore")} />

        <button
          onClick={() => setPage("create")}
          style={{
            width: 50,
            height: 38,
            border: "none",
            borderRadius: 10,
            background: "linear-gradient(90deg,#25f4ee,#fe2c55)",
            fontSize: 22,
            cursor: "pointer",
          }}
        >
          +
        </button>

        <NavButton icon="🔔" text="Inbox" active={page === "notifications"} onClick={() => setPage("notifications")} />
        <NavButton icon="👤" text="Profile" active={page === "profile"} onClick={() => setPage("profile")} />
      </nav>
    </div>
  );
}

function NavButton({ icon, text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        color: active ? "#fe2c55" : "#888",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        cursor: "pointer",
        fontWeight: 700,
      }}
    >
      <span style={{ fontSize: 20 }}>{icon}</span>
      <span style={{ fontSize: 10 }}>{text}</span>
    </button>
  );
}

function Stat({ title, value }) {
  return (
    <div
      style={{
        background: "#151515",
        borderRadius: 12,
        padding: 15,
        textAlign: "center",
      }}
    >
      <strong style={{ display: "block", fontSize: 20 }}>{value}</strong>
      <span style={{ color: "#888", fontSize: 12 }}>{title}</span>
    </div>
  );
}

function inputStyle(text, darkMode) {
  return {
    width: "100%",
    margin: "8px 0 18px",
    padding: 13,
    borderRadius: 10,
    border: "1px solid #444",
    background: darkMode ? "#0d0d0d" : "#f5f5f5",
    color: text,
    fontSize: 14,
    boxSizing: "border-box",
  };
}