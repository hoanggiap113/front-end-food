// Chuyển đổi từ HTML + Script sang ReactJS
import React, { useState, useEffect } from 'react';
import './Profile.css';

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
    <div className="settings-container">
      <nav className="sidebar">
        <div className="app-header">
          <div className="app-icon">AS</div>
          <span className="app-title">Thông tin cá nhân</span>
        </div>
        <div className="menu-section">
          <div className="menu-label">Thông tin chung</div>
          <button className={`menu-item ${tab === 'general' ? 'active' : ''}`} onClick={() => handleTabSwitch('general')}>📋 Thông tin</button>
          <button className={`menu-item ${tab === 'security' ? 'active' : ''}`} onClick={() => handleTabSwitch('security')}>🔒 Bảo mật</button>
        </div>
        <div className="menu-section">
          <div className="menu-label">Other</div>
          <button className="menu-item">💬 Contact support</button>
          <button className="menu-item">🚪 Đăng xuất</button>
        </div>
      </nav>

      <main className="main-content">
        <div className="content-header">
          <h1 className="content-title">{title}</h1>
        </div>

        {tab === 'general' && (
          <div className="tab-content active">
            <div className="profile-section">
              <div className="profile-avatar">SE</div>
              <div className="profile-info">
                <div className="profile-title">Ảnh cá nhân</div>
                <div className="profile-subtitle">Hỗ trợ ảnh PNG, JPG dưới 100MB</div>
                <button className="btn btn-secondary" onClick={handleAvatarUpload}>Tải ảnh lên</button>
              </div>
            </div>

            <form onSubmit={handleGeneralSubmit} id="general-form">
              <div className="form-group">
                <label className="form-label">Họ và tên</label>
                <input className="form-input" value={fullName} onChange={e => setFullName(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Địa chỉ giao hàng</label>
                <input className="form-input" value={address} onChange={e => setAddress(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <div style={{ display: 'flex', gap: 12 }}>
                  <input className="form-input" type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ flex: 1 }} />
                  <span className="verify-badge">Verify</span>
                </div>
              </div>
              <div className="phone-section">
                <div>
                  <div className="form-label" style={{ marginBottom: 4 }}>Số điện thoại</div>
                  <div className="phone-info">{phone || 'Không có số điện thoại'}</div>
                </div>
                <button type="button" className="btn btn-secondary" onClick={handlePhoneUpdate}>
                  {phone ? 'Cập nhật số điện thoại' : 'Thêm số điện thoại'}
                </button>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Cập nhật</button>
              </div>
            </form>

            <div className="deactivate-section">
              <div className="deactivate-title">Xoá tài khoản</div>
              <div className="deactivate-subtitle">Điều này sẽ làm mất thông tin của bạn</div>
              <button className="btn btn-danger" onClick={handleDelete}>Xoá tài khoản</button>
            </div>
          </div>
        )}

        {tab === 'security' && (
          <div className="tab-content active">
            <div className="security-section">
              <div className="security-header">
                <h3 className="security-title">Đổi mật khẩu</h3>
                <p className="security-subtitle">Cập nhật mật khẩu để bảo mật tài khoản</p>
              </div>
              <form onSubmit={handlePasswordSubmit} className="password-form">
                <div className="form-group">
                  <label className="form-label">Mật khẩu hiện tại</label>
                  <input name="current" type="password" className="form-input" value={passwords.current} onChange={handlePasswordChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">Mật khẩu mới</label>
                  <input name="new" type="password" className="form-input" value={passwords.new} onChange={handlePasswordChange} />
                  <div className="password-requirements">
                    <small className={`requirement ${requirements.length ? 'valid' : ''}`}>Ít nhất 8 ký tự</small>
                    <small className={`requirement ${requirements.upper ? 'valid' : ''}`}>Chữ in hoa</small>
                    <small className={`requirement ${requirements.lower ? 'valid' : ''}`}>Chữ thường</small>
                    <small className={`requirement ${requirements.number ? 'valid' : ''}`}>Số</small>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Xác nhận mật khẩu</label>
                  <input name="confirm" type="password" className="form-input" value={passwords.confirm} onChange={handlePasswordChange} />
                  <div className={`password-match-indicator ${passwords.confirm ? (passwords.new === passwords.confirm ? 'match' : 'no-match') : ''}`}>
                    {passwords.confirm && (passwords.new === passwords.confirm ? '✓ Khớp' : '✗ Không khớp')}
                  </div>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">Đổi mật khẩu</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Profile;
