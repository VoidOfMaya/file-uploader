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
- [X] Define `Folder` model
- [X] Define `File` model
- [X] Add relations between:
  - [X] User → Folder (one-to-many)
  - [X] User → File (one-to-many)
  - [X] Folder → File (one-to-many)
- [X] Run Prisma migration
- [ ] Test basic queries

---

## 4) File Upload Basics
- [X] Configure Multer (memoryStorage)
- [X] Add file size limits
- [X] Add file type filtering
- [X] Create upload route (`POST /files/upload`)
- [X] Store file metadata in DB (without cloud first, if testing)
- [X] Ensure upload is restricted to authenticated users

---

## 5) Folder CRUD
- [X] GET `/folders` (list user folders)
- [X] GET `/:id` (view folder)
- [X] POST `/folders/new` (create folder)
- [X] POST `/folders/edit` (edit form)
- [X] POST `/folders/update` (add files to folder folder)
- [X] POST `/folders/delete` (delete folder)
- [X] Ensure only owner can modify their folders

---

## 6) File Metadata & Download
- [X] Display:
  - [X] Original name
  - [X] Size (formatted KB/MB)
  - [X] mimetype
  - [X] Upload time
- [X] GET `/files/:id/download`
- [X] Redirect or stream from stored cloud URL
- [X] Ensure only owner can access their files

---

## 7) Cloud Storage Integration
- [X] Configure Cloudinary credentials
- [X] Implement upload_stream with proper Promise wrapper
- [X] Upload file buffer to Cloudinary
- [X] Store:
  - [X] `secure_url`
  - [X] `public_id`
- [X] downolad file from Cloudinary when deleting from DB

---

## 8) Validation & Error Handling
- [X] Handle upload errors gracefully
- [X] Handle DB errors
- [X] Display validation messages in views
- [X] Handle unauthorized access attempts

---

## 9) UX & Navigation
- [X] Create dashboard view
- [X] Display folders in dashboard
- [X] Display files inside selected folder
- [X] Add navigation bar (login/logout/dashboard)
- [X] Handle empty state (“No files yet”)

---

## 10) Extra Credit (Optional)
- [ ] Add shareable folder link token
- [ ] Add expiration time for shared links
- [ ] Public route `/share/:token`
- [ ] Validate token and expiration
