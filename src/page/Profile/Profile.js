// Chuyển đổi từ HTML + Script sang ReactJS
import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css';

function Profile() {
  const [tab, setTab] = useState('general');
  const [title, setTitle] = useState('Thông tin chung');
  const [fullName, setFullName] = useState('Pham Quang Duc');
  const [address, setAddress] = useState('Địa chỉ');
  const [email, setEmail] = useState('doe.mobileemail@gmail.com');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [requirements, setRequirements] = useState({ length: false, upper: false, lower: false, number: false });

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleTabSwitch = (tabKey) => {
    setTab(tabKey);
    if (tabKey === 'security') setTitle('Bảo mật');
    else if (tabKey === 'general') setTitle('Thông tin chung');
    else setTitle(tabKey);
  };

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const handlePhoneUpdate = () => {
    const input = prompt('Nhập số điện thoại:');
    if (input) setPhone(input);
  };

  const validatePassword = (value) => {
    setRequirements({
      length: value.length >= 8,
      upper: /[A-Z]/.test(value),
      lower: /[a-z]/.test(value),
      number: /\d/.test(value),
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
    if (name === 'new') validatePassword(value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const { current, new: newPass, confirm } = passwords;
    const allValid = Object.values(requirements).every(Boolean);
    if (!current || !newPass || !confirm) return alert('Điền đủ thông tin.');
    if (newPass !== confirm) return alert('Mật khẩu không khớp.');
    if (!allValid) return alert('Mật khẩu chưa đạt yêu cầu.');
    alert('Password changed successfully!');
    setPasswords({ current: '', new: '', confirm: '' });
    setRequirements({ length: false, upper: false, lower: false, number: false });
  };

  const handleAvatarUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/png,image/jpeg,image/jpg';
    input.onchange = (e) => setAvatar(e.target.files[0]);
    input.click();
  };

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc chắn muốn xoá tài khoản?')) {
      alert('Đã gửi yêu cầu xoá tài khoản.');
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["settings-container"]}>
        <nav className={styles["sidebar"]}>
          <div className={styles["app-header"]}>
            <div className={styles["app-icon"]}>AS</div>
            <span className={styles["app-title"]}>Thông tin cá nhân</span>
          </div>
          <div className={styles["menu-section"]}>
            <div className={styles["menu-label"]}>Thông tin chung</div>
            <button className={`${styles["menu-item"]} ${tab === 'general' ? styles["active"] : ''}`} onClick={() => handleTabSwitch('general')}>📋 Thông tin</button>
            <button className={`${styles["menu-item"]} ${tab === 'security' ? styles["active"] : ''}`} onClick={() => handleTabSwitch('security')}>🔒 Bảo mật</button>
          </div>
          <div className={styles["menu-section"]}>
            <div className={styles["menu-label"]}>Other</div>
            <button className={styles["menu-item"]}>💬 Contact support</button>
            <button className={styles["menu-item"]}>🚪 Đăng xuất</button>
          </div>
        </nav>

        <main className={styles["main-content"]}>
          <div className={styles["content-header"]}>
            <h1 className={styles["content-title"]}>{title}</h1>
          </div>

          {tab === 'general' && (
            <div className={`${styles["tab-content"]} ${styles["active"]}`}>

              <form onSubmit={handleGeneralSubmit} id="general-form">
                <div className={styles["form-group"]}>
                  <label className={styles["form-label"]}>Họ và tên</label>
                  <input className={styles["form-input"]} value={fullName} onChange={e => setFullName(e.target.value)} />
                </div>
                <div className={styles["form-group"]}>
                  <label className={styles["form-label"]}>Địa chỉ giao hàng</label>
                  <input className={styles["form-input"]} value={address} onChange={e => setAddress(e.target.value)} />
                </div>
                <div className={styles["form-group"]}>
                  <label className={styles["form-label"]}>Email</label>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <input className={styles["form-input"]} type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ flex: 1 }} />
                    <span className={styles["verify-badge"]}>Verify</span>
                  </div>
                </div>
                <div className={styles["phone-section"]}>
                  <div>
                    <div className={styles["form-label"]} style={{ marginBottom: 4 }}>Số điện thoại</div>
                    <div className={styles["phone-info"]}>{phone || 'Không có số điện thoại'}</div>
                  </div>
                  <button type="button" className={`${styles["btn"]} ${styles["btn-secondary"]}`} onClick={handlePhoneUpdate}>
                    {phone ? 'Cập nhật số điện thoại' : 'Thêm số điện thoại'}
                  </button>
                </div>
                <div className={styles["form-actions"]}>
                  <button type="submit" className={`${styles["btn"]} ${styles["btn-primary"]}`}>Cập nhật</button>
                </div>
              </form>

              <div className={styles["deactivate-section"]}>
                <div className={styles["deactivate-title"]}>Xoá tài khoản</div>
                <div className={styles["deactivate-subtitle"]}>Điều này sẽ làm mất thông tin của bạn</div>
                <button className={`${styles["btn"]} ${styles["btn-danger"]}`} onClick={handleDelete}>Xoá tài khoản</button>
              </div>
            </div>
          )}

          {tab === 'security' && (
            <div className={`${styles["tab-content"]} ${styles["active"]}`}>
              <div className={styles["security-section"]}>
                <div className={styles["security-header"]}>
                  <h3 className={styles["security-title"]}>Đổi mật khẩu</h3>
                  <p className={styles["security-subtitle"]}>Cập nhật mật khẩu để bảo mật tài khoản</p>
                </div>
                <form onSubmit={handlePasswordSubmit} className={styles["password-form"]}>
                  <div className={styles["form-group"]}>
                    <label className={styles["form-label"]}>Mật khẩu hiện tại</label>
                    <input name="current" type="password" className={styles["form-input"]} value={passwords.current} onChange={handlePasswordChange} />
                  </div>
                  <div className={styles["form-group"]}>
                    <label className={styles["form-label"]}>Mật khẩu mới</label>
                    <input name="new" type="password" className={styles["form-input"]} value={passwords.new} onChange={handlePasswordChange} />
                    <div className={styles["password-requirements"]}>
                      <small className={`${styles["requirement"]} ${requirements.length ? styles["valid"] : ''}`}>Ít nhất 8 ký tự</small>
                      <small className={`${styles["requirement"]} ${requirements.upper ? styles["valid"] : ''}`}>Chữ in hoa</small>
                      <small className={`${styles["requirement"]} ${requirements.lower ? styles["valid"] : ''}`}>Chữ thường</small>
                      <small className={`${styles["requirement"]} ${requirements.number ? styles["valid"] : ''}`}>Số</small>
                    </div>
                  </div>
                  <div className={styles["form-group"]}>
                    <label className={styles["form-label"]}>Xác nhận mật khẩu</label>
                    <input name="confirm" type="password" className={styles["form-input"]} value={passwords.confirm} onChange={handlePasswordChange} />
                    <div className={`${styles["password-match-indicator"]} ${passwords.confirm ? (passwords.new === passwords.confirm ? styles["match"] : styles["no-match"]) : ''}`}>
                      {passwords.confirm && (passwords.new === passwords.confirm ? '✓ Khớp' : '✗ Không khớp')}
                    </div>
                  </div>
                  <div className={styles["form-actions"]}>
                    <button type="submit" className={`${styles["btn"]} ${styles["btn-primary"]}`}>Đổi mật khẩu</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Profile;