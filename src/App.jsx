import React, { useState } from "react";
import {
  Home,
  Compass,
  PlusSquare,
  Bell,
  User,
  Heart,
  MessageCircle,
  Share2,
  Trophy,
  Star,
  Plus,
} from "lucide-react";

const categories = [
  "Football",
  "Gaming",
  "Fashion",
  "Cars",
  "Food",
  "Design",
  "Music",
  "Technology",
  "Other",
];

const categoryColors = {
  Football: "#3DDC97",
  Gaming: "#B18CFF",
  Fashion: "#FE2C55",
  Cars: "#25F4EE",
  Food: "#FFC93F",
  Design: "#FF8A5B",
  Music: "#E86BFF",
  Technology: "#6E8CFF",
  Other: "#B0A9C9",
};

const starterPosts = [
  {
    id: 1,
    title: "Rate this football kit",
    category: "Football",
    description: "What do you think of this design?",
    image: "https://picsum.photos/seed/football/700/1000",
    rating: 8.4,
    ratings: 127,
    likes: 54,
  },
  {
    id: 2,
    title: "My gaming setup",
    category: "Gaming",
    description: "Rate my setup out of 10.",
    image: "https://picsum.photos/seed/gaming/700/1000",
    rating: 9.1,
    ratings: 231,
    likes: 98,
  },
  {
    id: 3,
    title: "New car wrap",
    category: "Cars",
    description: "Fresh wrap finished today.",
    image: "https://picsum.photos/seed/car/700/1000",
    rating: 7.8,
    ratings: 89,
    likes: 41,
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [posts, setPosts] = useState(starterPosts);
  const [liked, setLiked] = useState([]);
  const [category, setCategory] = useState("All");
  const [dark, setDark] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postCategory, setPostCategory] = useState("Football");

  const filteredPosts =
    category === "All"
      ? posts
      : posts.filter((post) => post.category === category);

  function toggleLike(id) {
    setLiked((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function addPost() {
    if (!title.trim()) return;

    const newPost = {
      id: Date.now(),
      title,
      category: postCategory,
      description,
      image: `https://picsum.photos/seed/${Date.now()}/700/1000`,
      rating: 0,
      ratings: 0,
      likes: 0,
    };

    setPosts((current) => [newPost, ...current]);
    setTitle("");
    setDescription("");
    setPage("home");
  }

  const bg = dark ? "#000" : "#fff";
  const card = dark ? "#151515" : "#f3f3f3";
  const text = dark ? "#fff" : "#111";
  const muted = dark ? "#999" : "#666";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        color: text,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        button {
          font-family: inherit;
        }

        .hide-scroll::-webkit-scrollbar {
          display: none;
        }

        @media (min-width: 850px) {
          .mobile-nav {
            display: none !important;
          }

          .desktop-nav {
            display: flex !important;
          }

          .content {
            max-width: 850px !important;
          }
        }
      `}</style>

      {/* DESKTOP SIDEBAR */}
      <div
        className="desktop-nav"
        style={{
          display: "none",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: 220,
          borderRight: `1px solid ${dark ? "#222" : "#ddd"}`,
          padding: 25,
          flexDirection: "column",
          gap: 10,
          background: bg,
        }}
      >
        <h1
          style={{
            fontSize: 25,
            marginBottom: 30,
            textShadow: "2px 2px #25F4EE, -2px -2px #FE2C55",
          }}
        >
          RateIt
        </h1>

        <NavButton
          icon={<Home size={20} />}
          text="Home"
          active={page === "home"}
          onClick={() => setPage("home")}
        />

        <NavButton
          icon={<Compass size={20} />}
          text="Explore"
          active={page === "explore"}
          onClick={() => setPage("explore")}
        />

        <NavButton
          icon={<PlusSquare size={20} />}
          text="Create"
          active={page === "create"}
          onClick={() => setPage("create")}
        />

        <NavButton
          icon={<Trophy size={20} />}
          text="Leaderboard"
          active={page === "leaderboard"}
          onClick={() => setPage("leaderboard")}
        />

        <NavButton
          icon={<Bell size={20} />}
          text="Notifications"
          active={page === "notifications"}
          onClick={() => setPage("notifications")}
        />

        <NavButton
          icon={<User size={20} />}
          text="Profile"
          active={page === "profile"}
          onClick={() => setPage("profile")}
        />

        <div style={{ flex: 1 }} />

        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: 12,
            borderRadius: 12,
            border: "1px solid #333",
            background: card,
            color: text,
          }}
        >
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* MAIN CONTENT */}
      <main
        className="content"
        style={{
          width: "100%",
          maxWidth: 600,
          margin: "0 auto",
          padding: "20px 16px 100px",
        }}
      >
        {/* MOBILE HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 25,
              fontWeight: 900,
              textShadow: "2px 2px #25F4EE, -2px -2px #FE2C55",
            }}
          >
            RateIt
          </h1>

          <button
            onClick={() => setDark(!dark)}
            style={{
              background: card,
              color: text,
              border: "1px solid #333",
              borderRadius: "50%",
              width: 42,
              height: 42,
            }}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* HOME */}
        {page === "home" && (
          <>
            <div
              style={{
                display: "flex",
                gap: 8,
                overflowX: "auto",
                marginBottom: 15,
              }}
              className="hide-scroll"
            >
              {["All", ...categories].map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  style={{
                    flexShrink: 0,
                    border: "none",
                    borderRadius: 20,
                    padding: "8px 14px",
                    background:
                      category === item
                        ? categoryColors[item] || "#FE2C55"
                        : card,
                    color: category === item ? "#000" : text,
                    fontWeight: 700,
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: 20,
                marginBottom: 15,
              }}
            >
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: text,
                  fontWeight: 800,
                  fontSize: 16,
                }}
              >
                For You
              </button>

              <button
                style={{
                  background: "none",
                  border: "none",
                  color: muted,
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Following
              </button>
            </div>

            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                liked={liked.includes(post.id)}
                onLike={() => toggleLike(post.id)}
                dark={dark}
                card={card}
                text={text}
                muted={muted}
              />
            ))}
          </>
        )}

        {/* EXPLORE */}
        {page === "explore" && (
          <>
            <h2>Explore</h2>

            <p style={{ color: muted }}>
              Discover the highest-rated things on RateIt.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 10,
              }}
            >
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setCategory(item);
                    setPage("home");
                  }}
                  style={{
                    padding: 18,
                    borderRadius: 15,
                    border: `1px solid ${categoryColors[item]}55`,
                    background: `${categoryColors[item]}18`,
                    color: categoryColors[item],
                    fontWeight: 800,
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </>
        )}

        {/* CREATE */}
        {page === "create" && (
          <>
            <h2>Create a post</h2>

            <label>Title</label>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What are people rating?"
              style={inputStyle(card, text)}
            />

            <label>Category</label>

            <select
              value={postCategory}
              onChange={(e) => setPostCategory(e.target.value)}
              style={inputStyle(card, text)}
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label>Description</label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell people about it..."
              rows={5}
              style={inputStyle(card, text)}
            />

            <button
              onClick={addPost}
              disabled={!title.trim()}
              style={{
                width: "100%",
                padding: 15,
                border: "none",
                borderRadius: 30,
                background: title.trim()
                  ? "linear-gradient(90deg,#25F4EE,#FE2C55)"
                  : card,
                color: title.trim() ? "#000" : muted,
                fontWeight: 900,
                fontSize: 16,
              }}
            >
              <Plus size={18} /> Publish
            </button>
          </>
        )}

        {/* LEADERBOARD */}
        {page === "leaderboard" && (
          <>
            <h2>
              <Trophy size={22} /> Leaderboards
            </h2>

            {posts
              .slice()
              .sort((a, b) => b.rating - a.rating)
              .map((post, index) => (
                <div
                  key={post.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: 12,
                    marginBottom: 8,
                    background: card,
                    borderRadius: 14,
                  }}
                >
                  <strong style={{ width: 25 }}>{index + 1}</strong>

                  <img
                    src={post.image}
                    style={{
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                      borderRadius: 10,
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <strong>{post.title}</strong>
                    <div style={{ color: muted, fontSize: 12 }}>
                      {post.ratings} ratings
                    </div>
                  </div>

                  <strong style={{ color: "#25F4EE" }}>
                    {post.rating.toFixed(1)}
                  </strong>
                </div>
              ))}
          </>
        )}

        {/* NOTIFICATIONS */}
        {page === "notifications" && (
          <>
            <h2>Notifications</h2>

            <Notification text="Someone rated your post 9/10 ⭐" />
            <Notification text="Your post is trending 🔥" />
            <Notification text="Someone liked your post ❤️" />
            <Notification text="You reached 100 ratings 🎉" />
          </>
        )}

        {/* PROFILE */}
        {page === "profile" && (
          <>
            <div
              style={{
                textAlign: "center",
                padding: 20,
                background: card,
                borderRadius: 20,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  margin: "auto",
                  background:
                    "linear-gradient(135deg,#25F4EE,#FE2C55)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 35,
                }}
              >
                👤
              </div>

              <h2>@you</h2>

              <p style={{ color: muted }}>
                rating everything, judging nothing
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: 20,
                }}
              >
                <Stat number={142} label="Followers" />
                <Stat number={88} label="Following" />
                <Stat number={posts.length} label="Posts" />
              </div>
            </div>
          </>
        )}
      </main>

      {/* MOBILE NAV */}
      <nav
        className="mobile-nav"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 70,
          background: bg,
          borderTop: `1px solid ${dark ? "#222" : "#ddd"}`,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <MobileButton
          icon={<Home />}
          text="Home"
          active={page === "home"}
          onClick={() => setPage("home")}
        />

        <MobileButton
          icon={<Compass />}
          text="Explore"
          active={page === "explore"}
          onClick={() => setPage("explore")}
        />

        <button
          onClick={() => setPage("create")}
          style={{
            width: 48,
            height: 36,
            borderRadius: 10,
            border: "none",
            background: "linear-gradient(90deg,#25F4EE,#FE2C55)",
          }}
        >
          <Plus />
        </button>

        <MobileButton
          icon={<Bell />}
          text="Inbox"
          active={page === "notifications"}
          onClick={() => setPage("notifications")}
        />

        <MobileButton
          icon={<User />}
          text="Profile"
          active={page === "profile"}
          onClick={() => setPage("profile")}
        />
      </nav>
    </div>
  );
}

function PostCard({
  post,
  liked,
  onLike,
  dark,
  card,
  text,
  muted,
}) {
  const [rating, setRating] = useState(null);

  return (
    <article
      style={{
        marginBottom: 18,
        background: card,
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: "100%",
            height: 500,
            objectFit: "cover",
            display: "block",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 15,
            left: 15,
            padding: "6px 12px",
            borderRadius: 20,
            background: categoryColors[post.category],
            color: "#000",
            fontWeight: 900,
            fontSize: 12,
          }}
        >
          {post.category}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 15,
            left: 15,
            right: 15,
            color: "#fff",
          }}
        >
          <h2 style={{ marginBottom: 5 }}>{post.title}</h2>
          <p style={{ margin: 0 }}>{post.description}</p>
        </div>
      </div>

      <div style={{ padding: 15 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <strong style={{ fontSize: 30 }}>
              {post.rating.toFixed(1)}
            </strong>
            <span style={{ color: muted }}> / 10</span>
          </div>

          <div style={{ display: "flex", gap: 15 }}>
            <button
              onClick={onLike}
              style={{
                border: "none",
                background: "none",
                color: liked ? "#FE2C55" : muted,
              }}
            >
              <Heart fill={liked ? "#FE2C55" : "none"} />
              {post.likes + (liked ? 1 : 0)}
            </button>

            <button
              style={{
                border: "none",
                background: "none",
                color: muted,
              }}
            >
              <MessageCircle />
            </button>

            <button
              style={{
                border: "none",
                background: "none",
                color: muted,
              }}
            >
              <Share2 />
            </button>
          </div>
        </div>

        <p style={{ color: muted, fontSize: 12 }}>
          {post.ratings} ratings
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: 7,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
            <button
              key={number}
              onClick={() => setRating(number)}
              style={{
                aspectRatio: "1",
                borderRadius: 10,
                border:
                  rating === number
                    ? "2px solid #FE2C55"
                    : `1px solid ${dark ? "#333" : "#ddd"}`,
                background:
                  rating === number ? "#FE2C55" : dark ? "#111" : "#fff",
                color: rating === number ? "#fff" : text,
                fontWeight: 800,
              }}
            >
              {number}
            </button>
          ))}
        </div>

        {rating && (
          <p
            style={{
              color: "#25F4EE",
              fontWeight: 700,
              marginBottom: 0,
            }}
          >
            You rated this {rating}/10 ⭐
          </p>
        )}
      </div>
    </article>
  );
}

function NavButton({ icon, text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: 13,
        borderRadius: 12,
        border: "none",
        background: active ? "#181818" : "transparent",
        color: active ? "#FE2C55" : "#fff",
        fontWeight: active ? 800 : 500,
        textAlign: "left",
      }}
    >
      {icon}
      {text}
    </button>
  );
}

function MobileButton({ icon, text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        border: "none",
        background: "none",
        color: active ? "#FE2C55" : "#888",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        fontSize: 10,
      }}
    >
      {React.cloneElement(icon, { size: 21 })}
      {text}
    </button>
  );
}

function Notification({ text }) {
  return (
    <div
      style={{
        padding: 15,
        marginBottom: 8,
        borderRadius: 14,
        background: "#151515",
      }}
    >
      <Bell size={18} color="#FE2C55" />
      <span style={{ marginLeft: 10 }}>{text}</span>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <strong>{number}</strong>
      <div style={{ color: "#888", fontSize: 12 }}>{label}</div>
    </div>
  );
}

function inputStyle(card, text) {
  return {
    width: "100%",
    padding: 13,
    margin: "8px 0 18px",
    borderRadius: 12,
    border: "1px solid #333",
    background: card,
    color: text,
    fontSize: 15,
  };
}

export default App;