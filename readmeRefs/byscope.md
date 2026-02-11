#  Layer Scope Checklist

## 1) Project & Dependencies
- [X] Initialize Node project
- [X] Install Express
- [X] Install EJS (or chosen templating engine)
- [X] Install Prisma
- [X] Install PostgreSQL and configure connection
- [X] Install Passport (authentication)
- [X] Install session middleware + session store
- [X] Install Multer
- [X] Install Cloudinary SDK
- [X] Configure dotenv for environment variables

---

## 2) Authentication Layer
- [X] Configure Passport local strategy
- [X] Set up session serialization/deserialization
- [X] Create User model in Prisma
- [X] Build signup routes (GET/POST `/signup`)
- [X] Build login routes (GET/POST `/login`)
- [X] Build logout route (GET `/logout`)
- [X] Protect routes with authentication middleware

---

## 3) Database Schema (Prisma)
- [X] Define `User` model
- [ ] Define `Folder` model
- [X] Define `File` model
- [ ] Add relations between:
  - [ ] User → Folder (one-to-many)
  - [X] User → File (one-to-many)
  - [ ] Folder → File (one-to-many)
- [ ] Run Prisma migration
- [ ] Test basic queries

---

## 4) File Upload Basics
- [X] Configure Multer (memoryStorage)
- [X] Add file size limits
- [ ] Add file type filtering
- [X] Create upload route (`POST /files/upload`)
- [X] Store file metadata in DB (without cloud first, if testing)
- [ ] Ensure upload is restricted to authenticated users

---

## 5) Folder CRUD
- [ ] GET `/folders` (list user folders)
- [ ] GET `/folders/new` (create form)
- [ ] POST `/folders` (create folder)
- [ ] GET `/folders/:id/edit` (edit form)
- [ ] POST `/folders/:id/update` (rename folder)
- [ ] POST `/folders/:id/delete` (delete folder)
- [ ] Ensure only owner can modify their folders

---

## 6) File Metadata & Download
- [ ] GET `/files/:id` (file detail page)
- [X] Display:
  - [X] Original name
  - [X] Size (formatted KB/MB)
  - [X] mimetype
  - [X] Upload time
- [ ] GET `/files/:id/download`
- [ ] Redirect or stream from stored cloud URL
- [ ] Ensure only owner can access their files

---

## 7) Cloud Storage Integration
- [X] Configure Cloudinary credentials
- [X] Implement upload_stream with proper Promise wrapper
- [X] Upload file buffer to Cloudinary
- [X] Store:
  - [X] `secure_url`
  - [X] `public_id`
- [ ] Delete file from Cloudinary when deleting from DB

---

## 8) Validation & Error Handling
- [ ] Handle upload errors gracefully
- [ ] Handle DB errors
- [ ] Display validation messages in views
- [ ] Handle unauthorized access attempts

---

## 9) UX & Navigation
- [ ] Create dashboard view
- [ ] Display folders in dashboard
- [ ] Display files inside selected folder
- [ ] Add navigation bar (login/logout/dashboard)
- [X] Handle empty state (“No files yet”)

---

## 10) Extra Credit (Optional)
- [ ] Add shareable folder link token
- [ ] Add expiration time for shared links
- [ ] Public route `/share/:token`
- [ ] Validate token and expiration
