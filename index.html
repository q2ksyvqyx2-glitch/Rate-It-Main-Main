import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import {
  Home, Compass, PlusSquare, Bell, User, Sun, Moon, Trophy, Flame,
  TrendingUp, Clock, Heart, MessageCircle, Share2, Flag, X, ChevronLeft,
  Users, Star, Music2, Check, MoreHorizontal, Award, Plus, Volume2
} from "lucide-react";

/* ---------------------------------------------------------------
   RateIt v2 — "viral / TikTok" identity
   bg: true black #000 / white (light)
   accent duo: pink #FE2C55 (hype/CTA) + cyan #25F4EE (highlight/gold)
   display type: Space Grotesk (headlines) — bold, tight
   score type: IBM Plex Mono (split-flap score tiles)
   body: Inter
   signature: full-bleed vertical swipe feed, right-side action rail,
   glitch-duotone wordmark (cyan/pink offset shadow)
------------------------------------------------------------------*/

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600;700&display=swap');`;

const CATEGORIES = ["Football", "Gaming", "Fashion", "Cars", "Food", "Design", "Lifestyle", "Music", "Technology", "Other"];

const CATEGORY_COLOR = {
  Football: "#3DDC97", Gaming: "#B18CFF", Fashion: "#FE2C55", Cars: "#25F4EE",
  Food: "#FFC93F", Design: "#FF8A5B", Lifestyle: "#5FE0C7", Music: "#E86BFF",
  Technology: "#6E8CFF", Other: "#B0A9C9",
};

const AVATARS = ["🦊", "🐼", "🦁", "🐯", "🐨", "🦄", "🐸", "🦉", "🐙", "🦖", "🐳", "🦋"];

function img(seed, w, h) { return `https://picsum.photos/seed/rateit-${seed}/${w}/${h}`; }

function seedUsers() {
  const names = [
    "kickz.dara", "pixel_theo", "maren.builds", "outrun_lex", "sofia.plates",
    "grid.noah", "vintage.iris", "beatsby.omar", "clara.codes", "ren_kicks",
    "juno.fits", "atlas.rigs",
  ];
  return names.map((u, i) => ({
    id: "u" + i,
    username: u,
    avatar: AVATARS[i % AVATARS.length],
    avatarImg: img("avatar" + i, 100, 100),
    bio: [
      "boot spotter · matchday fits", "logo tinkerer, always cropping",
      "rooms & setups, one lamp at a time", "night drives + film grain",
      "plating things too pretty to eat", "track days on a student budget",
      "thrift finds only", "home studio, cheap mics", "front-end + film photos",
      "sneaker rotation curator", "outfit of the day, most days", "sim rig, real feelings",
    ][i],
    followers: Math.floor(80 + Math.random() * 4200),
    following: Math.floor(20 + Math.random() * 400),
  }));
}

function seedPosts(users) {
  const items = [
    ["Home kit or nah?", "Football", "New season drop, first look in daylight."],
    ["Redesigned my logo, take 4", "Design", "Simplified the mark, dropped the gradient."],
    ["Fit for the derby today", "Fashion", "Went monochrome, boots polished this time."],
    ["Track day whip", "Cars", "Finally got the wrap finished before Sunday."],
    ["Plated this for a pop-up", "Food", "Three hours for four bites, worth it."],
    ["Setup after the cable rebuild", "Gaming", "Took the whole weekend but it's silent now."],
    ["New profile pic, too much?", "Lifestyle", "Shot on film, scanned at the lab."],
    ["Home studio corner", "Music", "Foam's cheap, sound's not bad though."],
    ["Concept shoe render", "Design", "Blender still kicking my teeth in."],
    ["Away kit leak, real or fake?", "Football", "Found this on a forum, rate the design."],
    ["Desk rebuild, round 2", "Technology", "Went beige, no regrets."],
    ["Sunday fit, thrifted everything", "Fashion", "£14 total, tags still on the jacket."],
    ["Garage project, day 40", "Cars", "Paint's cured, wheels go on tomorrow."],
    ["Ramen attempt #9", "Food", "Broth finally tastes like the shop's."],
    ["Sim rig v3", "Gaming", "Direct drive wheel changed everything."],
  ];
  const now = Date.now();
  return items.map((it, i) => {
    const author = users[i % users.length];
    const ratingCount = Math.floor(20 + Math.random() * 900);
    const dist = Array.from({ length: 10 }, () => Math.random());
    const dSum = dist.reduce((a, b) => a + b, 0);
    const distribution = dist.map((d) => Math.round((d / dSum) * ratingCount));
    const totalScore = distribution.reduce((sum, count, idx) => sum + count * (idx + 1), 0);
    const totalRatings = distribution.reduce((a, b) => a + b, 0) || 1;
    const avg = totalScore / totalRatings;
    return {
      id: "p" + i,
      authorId: author.id,
      title: it[0],
      category: it[1],
      description: it[2],
      img: img(i, 800, 1400),
      thumb: img(i, 400, 400),
      distribution,
      avg,
      ratingCount: totalRatings,
      likes: Math.floor(5 + Math.random() * 400),
      comments: Math.floor(0 + Math.random() * 60),
      createdAt: now - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 6),
      trendingScore: Math.random(),
      myRating: null,
    };
  });
}

const USERS = seedUsers();
const ME = { id: "me", username: "you", avatar: "🐨", avatarImg: img("avatar-me", 100, 100), bio: "rating everything, judging nothing", followers: 142, following: 88 };
const NOTIF_SEED = [
  { id: "n1", type: "rating", text: "juno.fits rated your post a 9", time: "2m" },
  { id: "n2", type: "follow", text: "ren_kicks started following you", time: "18m" },
  { id: "n3", type: "trend", text: "Your post \"Fit for the derby today\" is trending 🔥", time: "1h" },
  { id: "n4", type: "milestone", text: "Your rating on \"Track day whip\" hit 100 replies", time: "3h" },
  { id: "n5", type: "comment", text: "atlas.rigs commented: \"needs a lower stance\"", time: "5h" },
  { id: "n6", type: "like", text: "clara.codes liked your post", time: "1d" },
];

function timeAgo(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return "now";
  const m = Math.floor(s / 60);
  if (m < 60) return m + "m";
  const h = Math.floor(m / 60);
  if (h < 24) return h + "h";
  return Math.floor(h / 24) + "d";
}
function userOf(id) { return id === "me" ? ME : USERS.find((u) => u.id === id); }

/* ---------- Split-flap score digit ---------- */
function FlipScore({ value, size = "md" }) {
  const str = value.toFixed(1);
  const sizes = { sm: { w: 15, h: 22, fs: 13 }, md: { w: 20, h: 30, fs: 17 }, lg: { w: 30, h: 44, fs: 26 } };
  const s = sizes[size];
  return (
    <span style={{ display: "inline-flex", gap: 2, fontFamily: "'IBM Plex Mono', monospace" }}>
      {str.split("").map((ch, i) => (
        ch === "." ? (
          <span key={i} style={{ width: s.w * 0.4, textAlign: "center", fontSize: s.fs, color: "var(--muted)", alignSelf: "flex-end", paddingBottom: 2 }}>.</span>
        ) : (
          <span key={i} className="flip-digit" style={{
            width: s.w, height: s.h, borderRadius: 5, background: "var(--flap-bg)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: s.fs, fontWeight: 700, color: "var(--flap-text)",
            border: "1px solid var(--flap-border)", boxShadow: "inset 0 -2px 0 rgba(0,0,0,0.35)",
          }}>{ch}</span>
        )
      ))}
    </span>
  );
}

/* ---------- Rating grid ---------- */
function RatingGrid({ post, myRating, onRate, disabled, compact }) {
  const [pending, setPending] = useState(null);
  const submit = (n) => {
    if (disabled) return;
    setPending(n);
    setTimeout(() => { onRate(n); }, 120);
  };
  return (
    <div>
      {disabled && (
        <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 8, fontWeight: 600 }}>
          This is your own post — you can't rate it.
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => {
          const active = myRating === n;
          const isPending = pending === n;
          return (
            <button
              key={n}
              disabled={disabled}
              onClick={() => submit(n)}
              className="rate-btn"
              style={{
                aspectRatio: "1",
                borderRadius: compact ? 10 : 12,
                border: active ? "2px solid var(--pink)" : "1px solid var(--border)",
                background: active ? "linear-gradient(135deg, var(--pink), #FF6A8A)" : "var(--card)",
                color: active ? "#fff" : "var(--text)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: compact ? 14 : 17,
                cursor: disabled ? "default" : "pointer",
                opacity: disabled ? 0.4 : 1,
                transform: isPending ? "scale(0.86)" : "scale(1)",
                transition: "transform 0.12s ease, background 0.15s ease, border 0.15s ease",
                boxShadow: active ? "0 4px 14px rgba(254,44,85,0.4)" : "none",
              }}
            >{n}</button>
          );
        })}
      </div>
      {myRating && (
        <div style={{ marginTop: 10, fontSize: 13, fontWeight: 600, color: "var(--cyan)", display: "flex", alignItems: "center", gap: 6 }}>
          <Check size={14} strokeWidth={3} /> You rated this {myRating}/10 — tap another number to change it.
        </div>
      )}
    </div>
  );
}

function RatingDistribution({ distribution }) {
  const max = Math.max(...distribution, 1);
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 46 }}>
      {distribution.map((count, i) => (
        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <div style={{
            width: "100%", height: Math.max(3, (count / max) * 36),
            background: i >= 7 ? "linear-gradient(180deg, var(--cyan), var(--pink))" : "var(--flap-bg)",
            borderRadius: 3,
          }} />
          <span style={{ fontSize: 9, color: "var(--muted)", fontFamily: "'IBM Plex Mono', monospace" }}>{i + 1}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Action rail button (TikTok-style right side) ---------- */
function RailBtn({ icon: Icon, label, active, color, onClick, filled }) {
  return (
    <button onClick={onClick} style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
      background: "none", border: "none", cursor: "pointer", color: "#fff",
    }}>
      <div style={{
        width: 46, height: 46, borderRadius: "50%",
        background: "rgba(0,0,0,0.32)", backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        border: active ? `2px solid ${color}` : "1px solid rgba(255,255,255,0.25)",
      }}>
        <Icon size={22} color={active ? color : "#fff"} fill={filled ? color : "none"} />
      </div>
      <span style={{ fontSize: 11, fontWeight: 700, textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>{label}</span>
    </button>
  );
}

/* ---------- Vertical swipe feed (signature view) ---------- */
function ReelCard({ post, onRate, onLike, liked, onOpenComments, canDelete, onDelete, containerHeight }) {
  const author = userOf(post.authorId);
  const isMine = post.authorId === "me";
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div style={{
      position: "relative", height: containerHeight, scrollSnapAlign: "start",
      borderRadius: 20, overflow: "hidden", marginBottom: 14, flexShrink: 0,
      background: "#000",
    }}>
      <img src={post.img} alt={post.title} style={{
        width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0,
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.88) 100%)",
      }} />

      <div style={{ position: "absolute", top: 14, left: 14, right: 14, display: "flex", justifyContent: "space-between" }}>
        <span style={{
          fontSize: 10.5, fontWeight: 800, padding: "5px 11px", borderRadius: 20,
          background: "rgba(0,0,0,0.4)", color: CATEGORY_COLOR[post.category], letterSpacing: 0.4,
          border: `1px solid ${CATEGORY_COLOR[post.category]}66`, backdropFilter: "blur(4px)",
        }}>{post.category.toUpperCase()}</span>
        <div style={{
          display: "flex", alignItems: "center", gap: 5, background: "rgba(0,0,0,0.4)", borderRadius: 20,
          padding: "5px 10px", backdropFilter: "blur(4px)",
        }}>
          <FlipScore value={post.avg} size="sm" />
        </div>
      </div>

      {/* right action rail */}
      <div style={{ position: "absolute", right: 12, bottom: 100, display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
        <img src={author.avatarImg} style={{ width: 42, height: 42, borderRadius: "50%", border: "2px solid #fff", objectFit: "cover" }} />
        <RailBtn icon={Heart} label={post.likes + (liked ? 1 : 0)} active={liked} filled={liked} color="var(--pink)" onClick={() => onLike(post.id)} />
        <RailBtn icon={MessageCircle} label={post.comments} color="var(--cyan)" onClick={onOpenComments} />
        <RailBtn icon={Share2} label="Share" color="var(--cyan)" onClick={() => {}} />
        {canDelete ? (
          <RailBtn icon={X} label="Delete" color="var(--pink)" onClick={() => onDelete(post.id)} />
        ) : (
          <RailBtn icon={Flag} label="Report" color="var(--muted)" onClick={() => {}} />
        )}
        <div style={{
          width: 44, height: 44, borderRadius: "50%", background: "conic-gradient(var(--cyan), var(--pink), var(--cyan))",
          display: "flex", alignItems: "center", justifyContent: "center", animation: "spin 6s linear infinite",
        }}>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🎵</div>
        </div>
      </div>

      {/* bottom info + rate CTA */}
      <div style={{ position: "absolute", left: 14, right: 74, bottom: 16, color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
          <span style={{ fontWeight: 800, fontSize: 14, fontFamily: "'Space Grotesk', sans-serif" }}>@{author.username}</span>
          <span style={{ fontSize: 11, opacity: 0.75 }}>· {timeAgo(post.createdAt)}</span>
        </div>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 3, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{post.title}</div>
        <div style={{ fontSize: 12.5, opacity: 0.85, marginBottom: 12, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{post.description}</div>

        <button onClick={() => setSheetOpen(true)} disabled={isMine} style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          width: "100%", padding: "12px", borderRadius: 30, border: "none",
          background: isMine ? "rgba(255,255,255,0.15)" : "linear-gradient(90deg, var(--pink), #FF6A8A)",
          color: "#fff", fontWeight: 800, fontSize: 14, fontFamily: "'Space Grotesk', sans-serif",
          cursor: isMine ? "default" : "pointer", boxShadow: isMine ? "none" : "0 6px 18px rgba(254,44,85,0.4)",
        }}>
          {post.myRating ? <>✓ You rated {post.myRating}/10 · tap to change</> : <>⭐ Rate this 1–10</>}
        </button>
      </div>

      {sheetOpen && (
        <div onClick={() => setSheetOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 60, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            width: "100%", maxWidth: 480, background: "var(--bg)", borderRadius: "22px 22px 0 0",
            padding: 20, border: "1px solid var(--border)", borderBottom: "none",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif", fontSize: 16 }}>Rate this 1–10</span>
              <button onClick={() => setSheetOpen(false)} className="icon-btn"><X size={20} /></button>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 12, background: "var(--card)", borderRadius: 14, marginBottom: 14, border: "1px solid var(--border)" }}>
              <FlipScore value={post.avg} size="lg" />
              <RatingDistribution distribution={post.distribution} />
            </div>
            <RatingGrid post={post} myRating={post.myRating} disabled={isMine} onRate={(n) => onRate(post.id, n)} />
          </div>
        </div>
      )}
    </div>
  );
}

function HomeFeed({ posts, onRate, onOpen, onLike, likedIds, onDelete }) {
  const [tab, setTab] = useState("foryou");
  const [cat, setCat] = useState("All");
  const [feedH, setFeedH] = useState(560);
  const wrapRef = useRef(null);

  useEffect(() => {
    const set = () => {
      if (wrapRef.current) setFeedH(window.innerHeight - wrapRef.current.getBoundingClientRect().top - 96);
    };
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const filtered = useMemo(() => {
    let list = posts.filter((p) => cat === "All" || p.category === cat);
    if (tab === "foryou") list = [...list].sort((a, b) => b.trendingScore - a.trendingScore);
    if (tab === "following") list = [...list].sort((a, b) => b.createdAt - a.createdAt);
    return list;
  }, [posts, tab, cat]);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 10 }}>
        {[["following", "Following"], ["foryou", "For You"]].map(([key, label]) => (
          <button key={key} onClick={() => setTab(key)} style={{
            background: "none", border: "none", cursor: "pointer", padding: "4px 0",
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 16,
            color: tab === key ? "var(--text)" : "var(--muted)",
            borderBottom: tab === key ? "2px solid var(--pink)" : "2px solid transparent",
          }}>{label}</button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 6, overflowX: "auto", marginBottom: 10, paddingBottom: 2 }} className="hide-scroll">
        {["All", ...CATEGORIES].map((c) => (
          <button key={c} onClick={() => setCat(c)} className="chip" style={{
            background: cat === c ? CATEGORY_COLOR[c] || "var(--pink)" : "var(--card)",
            color: cat === c ? "#000" : "var(--text)",
            border: "1px solid var(--border)", fontWeight: cat === c ? 800 : 500,
          }}>{c}</button>
        ))}
      </div>
      <div ref={wrapRef} style={{
        display: "flex", flexDirection: "column", overflowY: "auto",
        scrollSnapType: "y mandatory", height: feedH, borderRadius: 20,
      }} className="hide-scroll">
        {filtered.map((p) => (
          <ReelCard key={p.id} post={p} onRate={onRate} onLike={onLike} liked={likedIds.has(p.id)}
            onOpenComments={() => onOpen(p)} canDelete={p.authorId === "me"} onDelete={onDelete}
            containerHeight={feedH} />
        ))}
        {filtered.length === 0 && <EmptyState text="Nothing here yet" sub="Try a different category." />}
      </div>
    </div>
  );
}

function EmptyState({ text, sub, icon: Icon = Star }) {
  return (
    <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--muted)" }}>
      <Icon size={28} style={{ marginBottom: 10, opacity: 0.5 }} />
      <div style={{ fontWeight: 700, color: "var(--text)", fontFamily: "'Space Grotesk', sans-serif" }}>{text}</div>
      <div style={{ fontSize: 13, marginTop: 4 }}>{sub}</div>
    </div>
  );
}

/* ---------- Explore ---------- */
function Explore({ posts, onOpen }) {
  const [tab, setTab] = useState("trending");
  const lists = {
    trending: [...posts].sort((a, b) => b.trendingScore - a.trendingScore),
    top: [...posts].sort((a, b) => b.avg - a.avg),
    most: [...posts].sort((a, b) => b.ratingCount - a.ratingCount),
    new: [...posts].sort((a, b) => b.createdAt - a.createdAt),
  };
  const tabs = [["trending", "Trending"], ["top", "Top Rated"], ["most", "Most Rated"], ["new", "New"]];

  return (
    <div>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 800, marginBottom: 14 }}>Explore</h1>
      <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto" }} className="hide-scroll">
        {tabs.map(([key, label]) => (
          <button key={key} onClick={() => setTab(key)} className="pill" style={{
            background: tab === key ? "var(--pink)" : "var(--card)",
            color: tab === key ? "#fff" : "var(--text)", border: "1px solid var(--border)",
          }}>{label}</button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 22 }}>
        {CATEGORIES.map((c) => {
          const count = posts.filter((p) => p.category === c).length;
          return (
            <div key={c} style={{
              borderRadius: 14, padding: 12, background: CATEGORY_COLOR[c] + "18",
              border: `1px solid ${CATEGORY_COLOR[c]}44`,
            }}>
              <div style={{ fontWeight: 800, fontSize: 13, color: CATEGORY_COLOR[c], fontFamily: "'Space Grotesk', sans-serif" }}>{c}</div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{count} posts</div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
        {lists[tab].map((p) => (
          <div key={p.id} onClick={() => onOpen(p)} style={{
            aspectRatio: "9/16", borderRadius: 12, cursor: "pointer", position: "relative", overflow: "hidden",
            border: "1px solid var(--border)",
          }}>
            <img src={p.thumb} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.75) 100%)" }} />
            <div style={{
              position: "absolute", bottom: 6, left: 6, right: 6, fontSize: 10.5, fontWeight: 800,
              color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between",
              fontFamily: "'IBM Plex Mono', monospace",
            }}>
              <span>{p.avg.toFixed(1)}</span>
              <span style={{ display: "flex", alignItems: "center", gap: 2 }}><Heart size={9} fill="#fff" /> {p.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Leaderboard ---------- */
function Leaderboard({ posts }) {
  const [period, setPeriod] = useState("weekly");
  const [board, setBoard] = useState("rating");

  const byRating = [...posts].sort((a, b) => b.avg - a.avg).slice(0, 8);
  const byRated = [...posts].sort((a, b) => b.ratingCount - a.ratingCount).slice(0, 8);
  const byLiked = [...posts].sort((a, b) => b.likes - a.likes).slice(0, 8);
  const creators = USERS.map((u) => ({
    ...u,
    score: posts.filter((p) => p.authorId === u.id).reduce((s, p) => s + p.ratingCount, 0),
  })).sort((a, b) => b.score - a.score).slice(0, 8);

  const boards = {
    rating: { label: "Highest Avg Rating", data: byRating, kind: "post" },
    rated: { label: "Most Ratings", data: byRated, kind: "post" },
    liked: { label: "Most Liked", data: byLiked, kind: "post" },
    creators: { label: "Trending Creators", data: creators, kind: "creator" },
  };
  const active = boards[board];
  const medalColor = ["#FFC93F", "#C9CEDA", "#E38A5B"];

  return (
    <div>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 800, marginBottom: 4, display: "flex", alignItems: "center", gap: 8 }}>
        <Trophy size={22} color="var(--cyan)" /> Leaderboards
      </h1>
      <div style={{ display: "flex", gap: 6, margin: "14px 0", overflowX: "auto" }} className="hide-scroll">
        {["daily", "weekly", "monthly", "all-time"].map((p) => (
          <button key={p} onClick={() => setPeriod(p)} className="pill" style={{
            background: period === p ? "var(--cyan)" : "var(--card)",
            color: period === p ? "#00201F" : "var(--text)", border: "1px solid var(--border)",
            textTransform: "capitalize",
          }}>{p}</button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto" }} className="hide-scroll">
        {Object.entries(boards).map(([key, b]) => (
          <button key={key} onClick={() => setBoard(key)} className="pill" style={{
            background: board === key ? "var(--text)" : "var(--card)",
            color: board === key ? "var(--bg)" : "var(--text)", border: "1px solid var(--border)",
          }}>{b.label}</button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {active.data.map((item, i) => {
          const isCreator = active.kind === "creator";
          const person = isCreator ? item : userOf(item.authorId);
          return (
            <div key={item.id} className="card" style={{
              display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
              background: "var(--card)", borderRadius: 14, border: "1px solid var(--border)",
            }}>
              <div style={{
                width: 26, textAlign: "center", fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif",
                color: i < 3 ? medalColor[i] : "var(--muted)", fontSize: i < 3 ? 16 : 13,
              }}>{i + 1}</div>
              <img src={isCreator ? person.avatarImg : item.thumb} style={{
                width: 36, height: 36, borderRadius: isCreator ? "50%" : 10, objectFit: "cover", flexShrink: 0,
              }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 13.5, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {isCreator ? person.username : item.title}
                </div>
                <div style={{ fontSize: 11, color: "var(--muted)" }}>{isCreator ? `@${person.username}` : `by ${person.username}`}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                {board === "rating" ? <FlipScore value={item.avg} size="sm" /> :
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, fontSize: 14 }}>
                    {isCreator ? item.score : board === "liked" ? item.likes : item.ratingCount}
                  </div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Create post ---------- */
function CreatePost({ onPublish }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [description, setDescription] = useState("");
  const [coverSeed, setCoverSeed] = useState(() => Math.floor(Math.random() * 9999));

  const canPublish = title.trim().length > 0;

  return (
    <div>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 800, marginBottom: 16 }}>New post</h1>

      <label style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)" }}>COVER</label>
      <div style={{
        aspectRatio: "9/16", maxHeight: 340, borderRadius: 18, margin: "8px 0 10px", overflow: "hidden",
        border: "1px solid var(--border)", position: "relative",
      }}>
        <img src={img(coverSeed, 500, 800)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <button onClick={() => setCoverSeed(Math.floor(Math.random() * 9999))} style={{
          position: "absolute", bottom: 10, right: 10, padding: "8px 12px", borderRadius: 20,
          background: "rgba(0,0,0,0.55)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)",
          fontSize: 12, fontWeight: 700, cursor: "pointer", backdropFilter: "blur(4px)",
        }}>🔀 Shuffle cover</button>
      </div>

      <label style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)" }}>TITLE</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What are people rating?"
        style={{
          width: "100%", padding: "12px 14px", borderRadius: 12, border: "1px solid var(--border)",
          background: "var(--card)", color: "var(--text)", fontSize: 14, margin: "8px 0 18px", fontFamily: "inherit",
        }} />

      <label style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)" }}>CATEGORY</label>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "8px 0 18px" }}>
        {CATEGORIES.map((c) => (
          <button key={c} onClick={() => setCategory(c)} className="chip" style={{
            background: category === c ? CATEGORY_COLOR[c] : "var(--card)",
            color: category === c ? "#000" : "var(--text)",
            border: "1px solid var(--border)", fontWeight: category === c ? 800 : 500,
          }}>{c}</button>
        ))}
      </div>

      <label style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)" }}>DESCRIPTION</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3}
        placeholder="Add a little context (optional)"
        style={{
          width: "100%", padding: "12px 14px", borderRadius: 12, border: "1px solid var(--border)",
          background: "var(--card)", color: "var(--text)", fontSize: 14, margin: "8px 0 24px",
          resize: "none", fontFamily: "inherit",
        }} />

      <button disabled={!canPublish} onClick={() => {
        onPublish({ title, category, description, coverSeed });
        setTitle(""); setDescription(""); setCoverSeed(Math.floor(Math.random() * 9999));
      }} style={{
        width: "100%", padding: "14px", borderRadius: 30, border: "none",
        background: canPublish ? "linear-gradient(90deg, var(--pink), #FF6A8A)" : "var(--card)",
        color: canPublish ? "#fff" : "var(--muted)", fontWeight: 800, fontSize: 15,
        cursor: canPublish ? "pointer" : "default", fontFamily: "'Space Grotesk', sans-serif",
        boxShadow: canPublish ? "0 8px 20px rgba(254,44,85,0.4)" : "none",
      }}>Publish</button>
    </div>
  );
}

/* ---------- Notifications ---------- */
const NOTIF_ICON = { rating: Star, follow: Users, trend: Flame, milestone: Award, comment: MessageCircle, like: Heart };
function Notifications() {
  return (
    <div>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Notifications</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {NOTIF_SEED.map((n) => {
          const Icon = NOTIF_ICON[n.type] || Bell;
          return (
            <div key={n.id} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "12px 10px",
              borderRadius: 12, background: "var(--card)", border: "1px solid var(--border)", marginBottom: 8,
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
                background: "var(--pink)18", display: "flex", alignItems: "center", justifyContent: "center",
              }}><Icon size={16} color="var(--pink)" /></div>
              <div style={{ flex: 1, fontSize: 13.5 }}>{n.text}</div>
              <div style={{ fontSize: 11, color: "var(--muted)", flexShrink: 0 }}>{n.time}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Profile ---------- */
function Profile({ posts, ratingHistory }) {
  const myPosts = posts.filter((p) => p.authorId === "me");
  const avgReceived = myPosts.length
    ? myPosts.reduce((s, p) => s + p.avg * p.ratingCount, 0) / Math.max(1, myPosts.reduce((s, p) => s + p.ratingCount, 0))
    : 0;
  const totalReceived = myPosts.reduce((s, p) => s + p.ratingCount, 0);
  const highest = [...myPosts].sort((a, b) => b.avg - a.avg)[0];

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
        <div style={{ position: "relative" }}>
          <img src={ME.avatarImg} style={{ width: 68, height: 68, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--pink)" }} />
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 18, fontFamily: "'Space Grotesk', sans-serif" }}>@{ME.username}</div>
          <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2 }}>{ME.bio}</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
        {[["Followers", ME.followers], ["Following", ME.following], ["Posts", myPosts.length]].map(([l, v]) => (
          <div key={l} style={{ flex: 1, textAlign: "center", padding: "10px 0", background: "var(--card)", borderRadius: 12, border: "1px solid var(--border)" }}>
            <div style={{ fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif" }}>{v}</div>
            <div style={{ fontSize: 10.5, color: "var(--muted)" }}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px",
        background: "linear-gradient(135deg, var(--pink)18, var(--card))", borderRadius: 16, marginBottom: 18,
        border: "1px solid var(--border)",
      }}>
        <div>
          <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 700 }}>AVG RATING RECEIVED</div>
          <div style={{ marginTop: 4 }}><FlipScore value={avgReceived} size="lg" /></div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 700 }}>TOTAL RATINGS</div>
          <div style={{ fontSize: 20, fontWeight: 800, fontFamily: "'IBM Plex Mono', monospace" }}>{totalReceived}</div>
        </div>
      </div>

      {highest && (
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", marginBottom: 8 }}>HIGHEST-RATED POST</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, background: "var(--card)", borderRadius: 14, border: "1px solid var(--border)" }}>
            <img src={highest.thumb} style={{ width: 44, height: 44, borderRadius: 10, objectFit: "cover" }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 13.5 }}>{highest.title}</div>
              <div style={{ fontSize: 11, color: "var(--muted)" }}>{highest.ratingCount} ratings</div>
            </div>
            <FlipScore value={highest.avg} size="sm" />
          </div>
        </div>
      )}

      <div style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", marginBottom: 8 }}>YOUR RATING HISTORY</div>
      {ratingHistory.length === 0 && <EmptyState icon={Star} text="No ratings yet" sub="Rate a post from the home feed to see it here." />}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {ratingHistory.slice().reverse().map((r) => {
          const post = r.post;
          return (
            <div key={r.postId} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", background: "var(--card)", borderRadius: 12, border: "1px solid var(--border)" }}>
              <img src={post.thumb} style={{ width: 26, height: 26, borderRadius: 6, objectFit: "cover" }} />
              <div style={{ flex: 1, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{post.title}</div>
              <div style={{
                fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, fontSize: 13, color: "var(--pink)",
                background: "var(--pink)18", padding: "3px 8px", borderRadius: 8,
              }}>{r.value}/10</div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 22, marginBottom: 8, fontSize: 12, fontWeight: 700, color: "var(--muted)" }}>YOUR POSTS</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
        {myPosts.map((p) => (
          <div key={p.id} style={{ aspectRatio: "9/16", borderRadius: 10, overflow: "hidden", border: "1px solid var(--border)" }}>
            <img src={p.thumb} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
        {myPosts.length === 0 && (
          <div style={{ gridColumn: "1 / -1" }}>
            <EmptyState icon={PlusSquare} text="No posts yet" sub="Head to Create to post your first thing." />
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Post detail modal (from Explore/Leaderboard taps) ---------- */
function PostModal({ post, onClose, onRate, onLike, liked }) {
  if (!post) return null;
  const author = userOf(post.authorId);
  const isMine = post.authorId === "me";
  const sampleComments = [
    { u: "atlas.rigs", t: "needs a lower stance ngl" },
    { u: "clara.codes", t: "this is actually clean" },
    { u: "juno.fits", t: "9 from me, fire" },
  ];
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 50, display: "flex", alignItems: "flex-end", justifyContent: "center" }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "var(--bg)", width: "100%", maxWidth: 480, maxHeight: "88vh", overflowY: "auto",
        borderRadius: "22px 22px 0 0", padding: 18, border: "1px solid var(--border)", borderBottom: "none",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <button onClick={onClose} className="icon-btn"><ChevronLeft size={20} /></button>
          <span style={{ fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif" }}>Post</span>
          <MoreHorizontal size={20} color="var(--muted)" />
        </div>

        <div style={{ aspectRatio: "9/16", maxHeight: 380, borderRadius: 16, marginBottom: 14, overflow: "hidden" }}>
          <img src={post.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <img src={author.avatarImg} style={{ width: 26, height: 26, borderRadius: "50%", objectFit: "cover" }} />
          <span style={{ fontWeight: 700, fontSize: 13 }}>@{author.username}</span>
        </div>
        <div style={{ fontWeight: 800, fontSize: 18, fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>{post.title}</div>
        <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 14 }}>{post.description}</div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 14, background: "var(--card)", borderRadius: 14, marginBottom: 14, border: "1px solid var(--border)" }}>
          <FlipScore value={post.avg} size="lg" />
          <RatingDistribution distribution={post.distribution} />
        </div>

        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", marginBottom: 8 }}>RATE THIS 1–10</div>
        <RatingGrid post={post} myRating={post.myRating} disabled={isMine} onRate={(n) => onRate(post.id, n)} />

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 16, paddingTop: 12, borderTop: "1px solid var(--border)" }}>
          <button onClick={() => onLike(post.id)} className="icon-btn" style={{ color: liked ? "var(--pink)" : "var(--muted)" }}>
            <Heart size={17} fill={liked ? "var(--pink)" : "none"} /> {post.likes + (liked ? 1 : 0)}
          </button>
          <button className="icon-btn"><MessageCircle size={17} /> {post.comments}</button>
          <button className="icon-btn"><Share2 size={17} /></button>
        </div>

        <div style={{ marginTop: 16 }}>
          {sampleComments.map((c, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--card)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>💬</div>
              <div style={{ fontSize: 13 }}><b>{c.u}</b> <span style={{ color: "var(--muted)" }}>{c.t}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Nav ---------- */
const NAV_ITEMS = [
  ["home", "Home", Home], ["explore", "Explore", Compass], ["create", "", PlusSquare],
  ["notifications", "Inbox", Bell], ["profile", "Profile", User],
];

function DesktopSidebar({ page, setPage, theme, setTheme }) {
  return (
    <div style={{
      width: 220, flexShrink: 0, borderRight: "1px solid var(--border)", padding: "24px 14px",
      display: "flex", flexDirection: "column", gap: 4, height: "100vh", position: "sticky", top: 0,
    }}>
      <div style={{ padding: "0 10px 22px" }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 20,
          textShadow: "1.5px 1.5px 0 var(--cyan), -1.5px -1.5px 0 var(--pink)", color: "#fff",
        }}>RateIt</span>
      </div>
      {NAV_ITEMS.map(([key, label, Icon]) => (
        <button key={key} onClick={() => setPage(key)} style={{
          display: "flex", alignItems: "center", gap: 12, padding: "11px 12px", borderRadius: 12,
          background: page === key ? "var(--card)" : "transparent", border: "none", cursor: "pointer",
          color: page === key ? "var(--pink)" : "var(--text)", fontWeight: page === key ? 800 : 500,
          fontSize: 14.5, fontFamily: "'Space Grotesk', sans-serif", textAlign: "left",
        }}>
          <Icon size={19} /> {label || "Create"}
        </button>
      ))}
      <div style={{ flex: 1 }} />
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} style={{
        display: "flex", alignItems: "center", gap: 10, padding: "11px 12px", borderRadius: 12,
        background: "var(--card)", border: "1px solid var(--border)", cursor: "pointer", color: "var(--text)", fontSize: 13,
      }}>
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />} {theme === "dark" ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}

function MobileNav({ page, setPage }) {
  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, background: "var(--bg)",
      borderTop: "1px solid var(--border)", display: "flex", padding: "8px 4px 20px", zIndex: 30,
      alignItems: "center",
    }}>
      {NAV_ITEMS.map(([key, label, Icon]) => key === "create" ? (
        <button key={key} onClick={() => setPage(key)} style={{ flex: 1, display: "flex", justifyContent: "center", background: "none", border: "none" }}>
          <div style={{
            width: 44, height: 30, borderRadius: 8, background: "linear-gradient(90deg, var(--cyan), var(--pink))",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}><Plus size={20} color="#000" strokeWidth={3} /></div>
        </button>
      ) : (
        <button key={key} onClick={() => setPage(key)} style={{
          flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
          background: "none", border: "none", cursor: "pointer", color: page === key ? "var(--pink)" : "var(--muted)",
          padding: "6px 0",
        }}>
          <Icon size={20} />
          <span style={{ fontSize: 9.5, fontWeight: 700 }}>{label}</span>
        </button>
      ))}
    </div>
  );
}

/* ---------- App ---------- */
export default function RateItApp() {
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState("home");
  const [posts, setPosts] = useState(() => seedPosts(USERS));
  const [likedIds, setLikedIds] = useState(new Set());
  const [modalPost, setModalPost] = useState(null);
  const [ratingHistory, setRatingHistory] = useState([]);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 860);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleRate = useCallback((postId, value) => {
    setPosts((prev) => prev.map((p) => {
      if (p.id !== postId) return p;
      const dist = [...p.distribution];
      let ratingCount = p.ratingCount;
      let totalScore = p.avg * p.ratingCount;
      if (p.myRating) {
        dist[p.myRating - 1] -= 1;
        totalScore -= p.myRating;
      } else {
        ratingCount += 1;
      }
      dist[value - 1] += 1;
      totalScore += value;
      const avg = totalScore / ratingCount;
      return { ...p, distribution: dist, ratingCount, avg, myRating: value };
    }));
    setRatingHistory((prev) => {
      const without = prev.filter((r) => r.postId !== postId);
      const post = posts.find((p) => p.id === postId);
      return [...without, { postId, value, post: { ...post } }];
    });
    setModalPost((mp) => mp && mp.id === postId ? { ...mp, myRating: value } : mp);
  }, [posts]);

  const handleLike = useCallback((postId) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      next.has(postId) ? next.delete(postId) : next.add(postId);
      return next;
    });
  }, []);

  const handleDelete = useCallback((postId) => {
    setPosts((prev) => prev.filter((p) => p.id !== postId));
  }, []);

  const handlePublish = useCallback((data) => {
    const newPost = {
      id: "p_" + Date.now(), authorId: "me", title: data.title, category: data.category,
      description: data.description, img: img(data.coverSeed, 800, 1400), thumb: img(data.coverSeed, 400, 400),
      distribution: Array(10).fill(0), avg: 0, ratingCount: 0, likes: 0, comments: 0,
      createdAt: Date.now(), trendingScore: 1, myRating: null,
    };
    setPosts((prev) => [newPost, ...prev]);
    setPage("home");
  }, []);

  const vars = theme === "dark" ? {
    "--bg": "#000000", "--surface": "#121212", "--card": "#161616", "--text": "#FFFFFF",
    "--muted": "#A8A8A8", "--border": "rgba(255,255,255,0.12)", "--pink": "#FE2C55", "--cyan": "#25F4EE",
    "--flap-bg": "#0A0A0A", "--flap-text": "#25F4EE", "--flap-border": "rgba(255,255,255,0.12)",
  } : {
    "--bg": "#FFFFFF", "--surface": "#F5F5F7", "--card": "#F5F5F7", "--text": "#0A0A0A",
    "--muted": "#6B6B6B", "--border": "rgba(0,0,0,0.1)", "--pink": "#FE2C55", "--cyan": "#0E9C97",
    "--flap-bg": "#0A0A0A", "--flap-text": "#25F4EE", "--flap-border": "rgba(255,255,255,0.12)",
  };

  const pageEl = {
    home: <HomeFeed posts={posts} onRate={handleRate} onOpen={setModalPost} onLike={handleLike} likedIds={likedIds} onDelete={handleDelete} />,
    explore: <Explore posts={posts} onOpen={setModalPost} />,
    create: <CreatePost onPublish={handlePublish} />,
    notifications: <Notifications />,
    profile: <Profile posts={posts} ratingHistory={ratingHistory} />,
    leaderboard: <Leaderboard posts={posts} />,
  }[page];

  return (
    <div style={{ ...vars, background: "var(--bg)", color: "var(--text)", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        ${FONT_IMPORT}
        * { box-sizing: border-box; }
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .rate-btn:active { transform: scale(0.86); }
        .icon-btn { display: flex; align-items: center; gap: 5px; background: none; border: none; cursor: pointer; font-size: 12.5px; font-weight: 600; color: var(--muted); padding: 4px; }
        .pill { display: flex; align-items: center; gap: 5px; padding: 8px 13px; border-radius: 20px; font-size: 12.5px; font-weight: 700; cursor: pointer; white-space: nowrap; }
        .chip { padding: 7px 13px; border-radius: 20px; font-size: 12px; cursor: pointer; white-space: nowrap; }
        input:focus, textarea:focus { outline: 2px solid var(--pink); }
        button { font-family: inherit; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      <div style={{ display: "flex", maxWidth: 1100, margin: "0 auto" }}>
        {!isMobile && <DesktopSidebar page={page} setPage={setPage} theme={theme} setTheme={setTheme} />}
        <div style={{ flex: 1, minWidth: 0, padding: isMobile ? "16px 16px 90px" : "24px 32px 40px" }}>
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 20,
                textShadow: "1.5px 1.5px 0 var(--cyan), -1.5px -1.5px 0 var(--pink)", color: "#fff",
              }}>RateIt</span>
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="icon-btn" style={{ color: "var(--text)" }}>
                {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
              </button>
            </div>
          )}
          {!isMobile && page !== "leaderboard" && (
            <button onClick={() => setPage("leaderboard")} className="pill" style={{
              marginBottom: 16, background: "var(--cyan)22", color: "var(--cyan)", border: "1px solid var(--cyan)44",
            }}><Trophy size={13} /> Leaderboards</button>
          )}
          {pageEl}
        </div>
      </div>

      {isMobile && <MobileNav page={page} setPage={setPage} />}
      {isMobile && page !== "leaderboard" && (
        <button onClick={() => setPage("leaderboard")} style={{
          position: "fixed", bottom: 90, right: 18, width: 50, height: 50, borderRadius: "50%",
          background: "var(--cyan)", border: "none", boxShadow: "0 6px 18px rgba(37,244,238,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 30,
        }}><Trophy size={20} color="#00201F" /></button>
      )}

      <PostModal post={modalPost} onClose={() => setModalPost(null)} onRate={handleRate} onLike={handleLike} liked={modalPost ? likedIds.has(modalPost.id) : false} />
    </div>
  );
}
