* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #f0f2f5;
  color: #1c1e21;
}

/* Header */
.header {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 56px;
}

.header-left {
  display: flex;
  align-items: center;
  flex: 1;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #1877f2;
  margin-right: 16px;
  cursor: pointer;
}

.search-bar {
  position: relative;
}

.search-bar input {
  background: #f0f2f5;
  border: none;
  border-radius: 50px;
  padding: 8px 16px;
  width: 240px;
  outline: none;
  font-size: 15px;
}

.search-bar input:focus {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-icons {
  display: flex;
  gap: 8px;
}

.nav-icon {
  width: 112px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.nav-icon:hover {
  background: #f0f2f5;
}

.nav-icon.active {
  color: #1877f2;
  border-bottom: 3px solid #1877f2;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: flex-end;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.profile-section:hover {
  background: #f0f2f5;
}

.header-buttons {
  display: flex;
  gap: 8px;
}

.header-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #e4e6ea;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: background-color 0.2s;
}

.header-btn:hover {
  background: #d8dadf;
}

/* Profile Pictures */
.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(45deg, #1877f2, #42a5f5);
  position: relative;
}

.profile-pic.small {
  width: 32px;
  height: 32px;
}

.profile-pic.tiny {
  width: 24px;
  height: 24px;
}

.profile-pic::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  background: white;
  border-radius: 50%;
}

/* Main Container */
.main-container {
  display: flex;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 56px;
  gap: 16px;
}

/* Left Sidebar */
.left-sidebar {
  width: 280px;
  padding: 20px 8px;
  position: fixed;
  height: calc(100vh - 56px);
  overflow-y: auto;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 4px;
}

.sidebar-item:hover {
  background: #e4e6ea;
}

.sidebar-item .icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.sidebar-item span:last-child {
  font-weight: 500;
  font-size: 15px;
}

/* Center Feed */
.center-feed {
  flex: 1;
  max-width: 680px;
  margin: 0 auto;
  padding: 20px 0;
}

/* Create Post */
.create-post {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  margin-bottom: 16px;
}

.create-post-top {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.create-post-top input {
  flex: 1;
  background: #f0f2f5;
  border: none;
  border-radius: 50px;
  padding: 8px 12px;
  font-size: 16px;
  outline: none;
}

.create-post-top input:focus {
  background: #e4e6ea;
}

.create-post-bottom {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #e4e6ea;
  padding-top: 8px;
}

.post-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-weight: 500;
  color: #65676b;
}

.post-option:hover {
  background: #f0f2f5;
}

.post-option .icon {
  font-size: 20px;
}

/* Stories */
.stories-container {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.story {
  min-width: 112px;
  height: 200px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s;
}

.story:hover {
  transform: scale(1.02);
}

.create-story {
  background: white;
  border: 1px solid #e4e6ea;
}

.story-image {
  width: 100%;
  height: 140px;
  background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
  background-size: 400% 400%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.story-content {
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.add-story-btn {
  width: 40px;
  height: 40px;
  background: #1877f2;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: -20px;
  border: 4px solid white;
}

.story-profile {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(45deg, #1877f2, #42a5f5);
  position: absolute;
  top: 8px;
  left: 8px;
  border: 3px solid white;
}

.story-name {
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: white;
  font-weight: bold;
  font-size: 12px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Posts */
.post {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  overflow: hidden;
}

.post-header {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
}

.post-info {
  flex: 1;
}

.post-info h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 2px;
}

.post-time {
  font-size: 13px;
  color: #65676b;
}

.post-options {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  color: #65676b;
  transition: background-color 0.2s;
}

.post-options:hover {
  background: #f0f2f5;
}

.post-content {
  padding: 0 16px 12px;
}

.post-content p {
  font-size: 15px;
  line-height: 1.33;
  margin-bottom: 12px;
}

.post-image {
  width: 100%;
  height: 300px;
  background: linear-gradient(45deg, #74b9ff, #0984e3);
  margin: 0 -16px;
  position: relative;
}

.post-image.tech {
  background: linear-gradient(45deg, #6c5ce7, #a29bfe);
}

.post-image.food {
  background: linear-gradient(45deg, #fd79a8, #fdcb6e);
}

.post-image::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.post-stats {
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: #65676b;
  border-bottom: 1px solid #e4e6ea;
}

.post-actions {
  display: flex;
  padding: 4px 16px;
}

.action-btn {
  flex: 1;
  background: none;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #65676b;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background: #f0f2f5;
}

/* Right Sidebar */
.right-sidebar {
  width: 280px;
  padding: 20px 8px;
  position: fixed;
  right: 0;
  height: calc(100vh - 56px);
  overflow-y: auto;
}

.sidebar-section {
  margin-bottom: 24px;
}

.sidebar-section h3 {
  font-size: 17px;
  font-weight: 600;
  color: #65676b;
  margin-bottom: 8px;
  padding: 0 8px;
}

.sponsored-item {
  display: flex;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 8px;
}

.sponsored-item:hover {
  background: #f0f2f5;
}

.sponsored-image {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background: linear-gradient(45deg, #ff7675, #fd79a8);
  flex-shrink: 0;
}

.sponsored-content h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
}

.sponsored-content p {
  font-size: 13px;
  color: #65676b;
  margin-bottom: 4px;
}

.sponsored-content span {
  font-size: 12px;
  color: #65676b;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 4px;
  position: relative;
}

.contact-item:hover {
  background: #f0f2f5;
}

.contact-item span {
  font-size: 15px;
  font-weight: 500;
}

.online-status {
  width: 8px;
  height: 8px;
  background: #42b883;
  border-radius: 50%;
  position: absolute;
  right: 8px;
  border: 2px solid white;
}

/* Responsive Design */
@media (max-width: 1100px) {
  .right-sidebar {
      display: none;
  }
  
  .center-feed {
      margin-right: 16px;
  }
}

@media (max-width: 900px) {
  .left-sidebar {
      display: none;
  }
  
  .center-feed {
      margin-left: 16px;
      margin-right: 16px;
  }
  
  .main-container {
      padding: 56px 0 0;
  }
}

@media (max-width: 768px) {
  .header-center {
      display: none;
  }
  
  .search-bar input {
      width: 180px;
  }
  
  .stories-container {
      gap: 4px;
  }
  
  .story {
      min-width: 100px;
      height: 180px;
  }
  
  .center-feed {
      margin: 0 8px;
  }
  
  .header {
      padding: 0 12px;
  }
  
  .logo {
      font-size: 20px;
  }
  
  .post-content p {
      font-size: 14px;
  }
  
  .create-post-top input {
      font-size: 14px;
  }
}

@media (max-width: 480px) {
  .header {
      padding: 0 8px;
  }
  
  .search-bar input {
      width: 120px;
      font-size: 14px;
  }
  
  .profile-section span {
      display: none;
  }
  
  .create-post-bottom {
      flex-direction: column;
      gap: 4px;
  }
  
  .post-option {
      justify-content: center;
  }
  
  .logo {
      font-size: 18px;
      margin-right: 8px;
  }
  
  .header-buttons {
      gap: 4px;
  }
  
  .header-btn {
      width: 36px;
      height: 36px;
      font-size: 14px;
  }
  
  .nav-icon {
      width: 60px;
      height: 44px;
      font-size: 18px;
  }
  
  .post {
      margin-bottom: 12px;
  }
  
  .post-header {
      padding: 10px 12px;
  }
  
  .post-content {
      padding: 0 12px 10px;
  }
  
  .post-content p {
      font-size: 13px;
      line-height: 1.4;
  }
  
  .post-stats {
      padding: 6px 12px;
      font-size: 13px;
  }
  
  .post-actions {
      padding: 2px 12px;
  }
  
  .action-btn {
      font-size: 13px;
      padding: 6px;
  }
  
  .create-post {
      padding: 10px 12px;
      margin-bottom: 12px;
  }
  
  .create-post-top {
      margin-bottom: 10px;
  }
  
  .create-post-top input {
      font-size: 13px;
      padding: 6px 10px;
  }
  
  .post-option {
      padding: 6px 12px;
      font-size: 13px;
  }
  
  .stories-container {
      margin-bottom: 12px;
      gap: 6px;
  }
  
  .story {
      min-width: 90px;
      height: 160px;
  }
  
  .story-name {
      font-size: 11px;
  }
}

@media (max-width: 360px) {
  .header {
      padding: 0 6px;
  }
  
  .logo {
      font-size: 16px;
      margin-right: 6px;
  }
  
  .search-bar input {
      width: 100px;
      font-size: 13px;
      padding: 6px 12px;
  }
  
  .header-btn {
      width: 32px;
      height: 32px;
      font-size: 12px;
  }
  
  .center-feed {
      margin: 0 4px;
  }
  
  .post-header {
      padding: 8px 10px;
  }
  
  .post-content {
      padding: 0 10px 8px;
  }
  
  .post-stats {
      padding: 4px 10px;
      font-size: 12px;
  }
  
  .post-actions {
      padding: 2px 10px;
  }
  
  .action-btn {
      font-size: 12px;
      padding: 4px;
  }
  
  .create-post {
      padding: 8px 10px;
  }
  
  .story {
      min-width: 80px;
      height: 140px;
  }
  
  .story-image {
      height: 100px;
  }
}
