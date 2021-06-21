import React, { useState } from 'react';
import * as styles from './ContactForm.module.css';

const initialState = {
  name: '',
  company: '',
  url: '',
  email: '',
  message: '',
};

function ContactForm() {
  const [formState, setFormState] = useState(initialState);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formState }),
    })
      .then(() => {
        setFormState(initialState);
        alert('メッセージを送信しました。');
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className={styles.title}>ワクハラ通報フォーム</p>
      <p className={styles.description}>
        ワクハラについて公開したい情報をください。24時間以内に返信いたします。
      </p>
      <fieldset>
        <label htmlFor="name">名前</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formState.name}
          placeholder="通法者の名前を入力してください。"
          required
        />
      </fieldset>
      <fieldset>
        <label htmlFor="company">会社名</label>
        <input
          id="company"
          type="text"
          name="company"
          onChange={handleChange}
          value={formState.company}
          placeholder="ワクハラがおこなわれている会社名を入力してください。"
          required
        />
      </fieldset>
      <fieldset>
        <label htmlFor="sns">SNSのURL</label>
        <input
          id="url"
          type="url"
          name="url"
          onChange={handleChange}
          value={formState.url}
          placeholder="（任意）通法者のSNSのURLを入力してください。"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="email">メールアドレス</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formState.email}
          placeholder="メールアドレスを入力してください。"
          required
        />
      </fieldset>
      <fieldset>
        <label htmlFor="message">メッセージ</label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="メッセージを入力してください。"
          required
        />
      </fieldset>
      <fieldset>
        <button type="submit">ワクハラ情報を公開してください</button>
      </fieldset>
    </form>
  );
}

export default ContactForm;
