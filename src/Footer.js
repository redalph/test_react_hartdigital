import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-info">
            <p>&copy; 2021 White Frame, Все права защищены.</p>
            <a href="mailto:info@whiteframe.ru">info@whiteframe.ru</a>
            <a href="tel:+7 843 123 45 67">+7 843 123 45 67</a>
            </div>
            <div className="footer-social">
            <a href="https://vk.com/" class="footer-social-icon"><i class="fab fa-vk"></i></a>
            <a href="https://www.facebook.com/" class="footer-social-icon"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/" class="footer-social-icon"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com/?lang=en" class="footer-social-icon"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </footer>
  )
}
