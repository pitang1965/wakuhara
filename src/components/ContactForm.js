import React, { useState } from 'react';
import * as styles from './ContactForm.module.css';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    url:'',
    email: '',
    message: '',
  });

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
      .then(() => alert('メールを送信しました。'))
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
      <label className={styles.title}>ワクハラ通報フォーム</label>
      <label className={styles.description}>
        ワクハラについて公開したい情報をください。24時間以内に返信いたします。
      </label>
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
          required
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
          className={styles.message}
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="メッセージを入力してください。"
          required
        />
      </fieldset>
      <fieldset>
        <button type="submit">送信</button>
      </fieldset>
    </form>
  );
}

export default ContactForm;
