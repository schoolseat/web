import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout, Navbar, Footer } from '../components';

export default function Login() {
  const router = useRouter();
  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        /* Form data */
      }),
    }).then((res) => {
      // Do a fast client-side transition to the already prefetched dashboard page
      if (res.ok) router.push('/dashboard');
    });
  }, []);

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch('/dashboard');
  }, []);

  return (
    <div>
      <Layout />
      <Navbar />
      <div className="page-login">
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
