# 🧱 A-5 Dev Stack Builder Website

## 🧩 Features & Requirements

### 🧭 Navbar

- Navbar designed according to the UI.
- Left: brand logo + "Dev Stack" name.
- Center: nav links — Home, Technologies, Projects, About, Contact.
- Right: "Sign In" (text button) and "Sign Up" (filled pill button).
- Navbar stays sticky at the top while scrolling.

---

### 🍔 Mobile Navbar

- On small devices the navbar has three parts:
    - Left: hamburger menu icon
    - Center: brand logo
    - Right: Sign In and Sign Up buttons

![Hamburger menu](./ui/hamburger.png)

---

### 🎯 Banner / Hero

- Banner section includes:
    - Heading (two-tone: plain text + gradient text)
    - Description text
    - Two buttons — "Explore Technologies" (gradient) and "Learn More" (outlined)
    - Banner image

---

### 📦 JSON Data

Create 10-15 technology data with:

- id
- name
- category (Frontend / Backend / Database / Language / Styling / DevOps / Tools)
- description
- icon (image URL)
- rating (example: 4.8)
- difficulty (Beginner-Friendly / Intermediate / Advanced)
- badge (example: Popular, Fast, Essential, Containers)

**Example:**

```json
[
    {
        "id": "react",
        "name": "React",
        "category": "Frontend",
        "description": "A declarative, component-based JavaScript library for building modern user interfaces.",
        "icon": "https://icon.icepanel.io/Technology/svg/React.svg",
        "rating": 4.9,
        "difficulty": "Beginner-Friendly",
        "badge": "Popular"
    },
    {
        "id": "postgresql",
        "name": "PostgreSQL",
        "category": "Database",
        "description": "A powerful, open-source object-relational database system with proven reliability.",
        "icon": "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
        "rating": 4.9,
        "difficulty": "Intermediate",
        "badge": "Top SQL"
    }
]
```

🚩 You can take help of AI Systems for generating the JSON Data.

🚩 Load the data from the JSON file — do not hardcode the array inside the component.

---

### 🃏 Technology Cards

- Display all technologies in a 3-column layout (responsive: 1 column on mobile, 2 on tablet).
- Each card includes:
    - Icon
    - Badge
    - Name
    - Description
    - Category chip
    - Difficulty
    - Rating with a star
    - "Add to Stack" button

---

### 🧰 Your Stack Section (Sidebar)

- A "Your Stack" panel sits beside the technology grid.
- Shows a heading and the selected count — example: "2 Technology Selected".
- By default the panel shows an empty message.

| Empty state                                     | With selected items                               |
| ----------------------------------------------- | ------------------------------------------------- |
| ![Your Stack empty](./ui/YourStack-without.png) | ![Your Stack with items](./ui/YourStack-with.png) |

---

### ➕ Add to Stack Functionality

- Clicking "Add to Stack" adds that technology to the "Your Stack" panel.
- Each stack item shows: icon, name, category, and a remove (✕) button.
- Stack layout: 1 column.
- **The same technology cannot be added twice.** Trying again shows a warning alert.

- Once added, that card's button becomes disabled and reads "✓ Added to Stack".

---

### ❌ Remove Functionality

- Clicking the ✕ button on a stack item removes only that item from the stack.
- "Remove All" button clears the whole stack at once.

---

### 🦶 Footer

- Footer designed based on the UI.
- Brand block: logo, name, short description, social links (GitHub, Twitter, LinkedIn).
- Three link groups: Product, Company, Legal.
- Bottom bar: copyright text + Privacy and Terms links.

---

### 📱 Responsive Design

- Fully responsive across mobile, tablet, and desktop.
- Follow standard responsive practices.

---

# 🚀 Challenges Part

### 🔔 Use a NPM Package React-Toastify

- Use react-toastify to show alerts for: add to stack, duplicate add attempt, remove, and remove all.

---

### ⏳ Loading State

- Show a loading message/spinner while the JSON data is being fetched.
- Note: since the JSON is a local file, the loading state may only be visible for a few milliseconds and can be hard to catch on screen. That is completely fine — the requirement is that the loading state exists and works, not that it stays visible for long.

---

### 🎨 Gradient Brand Theme

- Use one shared gradient (orange → pink → violet) or you preffered also approapriate gradient color system for the brand name, hero heading highlight, and primary buttons.
- Define the gradient in one place so the whole UI can be re-themed by changing a single value.

---

## ⚙️ Technology You Can Use

- React.js
- Tailwind CSS, DaisyUI
- TypeScript / JavaScript (ES6+)
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite (build tool)
