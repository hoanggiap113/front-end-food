// src/page/BillDetail.js

import React, { useState } from 'react';
import './BillDetail.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function BillDetail() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
    payment: 'cash'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData(prev => ({ ...prev, payment: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['name', 'lastName', 'phone', 'address'];
    let newErrors = {};
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = 'Trường bắt buộc';
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('Đơn hàng đã được gửi thành công!');
    }
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5 text-warning fw-bold">THÔNG TIN ĐƠN HÀNG</h1>
      <Row className="g-4">
        <Col md={7}>
          <Card className="p-4 shadow-sm">
            <h2 className="section-title mb-4">GIAO HÀNG ĐẾN</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Tên <span className="text-warning">*</span></Form.Label>
                <Form.Control id="name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Họ <span className="text-warning">*</span></Form.Label>
                <Form.Control id="lastName" value={formData.lastName} onChange={handleChange} isInvalid={!!errors.lastName} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Số điện thoại <span className="text-warning">*</span></Form.Label>
                <Form.Control type="tel" id="phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" id="email" value={formData.email} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nhập địa chỉ <span className="text-warning">*</span></Form.Label>
                <Form.Control as="textarea" id="address" rows={3} value={formData.address} onChange={handleChange} isInvalid={!!errors.address} />
              </Form.Group>
              <Form.Text className="text-muted">
                Vui lòng nhập và chọn địa chỉ được gợi ý. Nếu không, vui lòng liên hệ hotline để được hỗ trợ.
              </Form.Text>
              <Form.Group className="mt-3">
                <Form.Label>Ghi chú</Form.Label>
                <Form.Control as="textarea" id="notes" rows={3} value={formData.notes} onChange={handleChange} />
              </Form.Group>
              <h3 className="section-title mt-4">PHƯƠNG THỨC THANH TOÁN</h3>
              <div className="radio-group">
                <Form.Check
                  type="radio"
                  id="paymentCash"
                  name="payment"
                  value="cash"
                  label="Thanh toán bằng tiền mặt"
                  checked={formData.payment === 'cash'}
                  onChange={handleRadioChange}
                />
                <Form.Check
                  type="radio"
                  id="paymentBank"
                  name="payment"
                  value="bank"
                  label="Thanh toán bằng chuyển khoản"
                  checked={formData.payment === 'bank'}
                  onChange={handleRadioChange}
                />
              </div>
              <Button variant="warning" type="submit" className="mt-4 w-100 fw-bold">
                Đặt Mua
              </Button>
            </Form>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="p-4 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold">CHI TIẾT ĐƠN HÀNG</h4>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://via.placeholder.com/80x80"
                alt="Gà sốt cay"
                className="rounded me-3"
                width="80"
                height="80"
              />
              <div className="flex-grow-1">
                <div className="fw-bold">2 GÀ SỐT CAY + 1 KHOAI TÂY CHIÊN + 1 NƯỚC NGỌT</div>
                <div className="text-muted small">x 1</div>
              </div>
              <div className="text-warning fw-bold">95,000 ₫</div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Chi phí tạm tính</span>
              <span>95,000 ₫</span>
            </div>
            <div className="text-muted small mb-2">(Đã bao gồm VAT 8%)</div>
            <div className="d-flex justify-content-between fw-bold fs-5 border-top pt-3 mt-2 text-warning">
              <span>Tổng Cộng</span>
              <span>95,000 ₫</span>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BillDetail;