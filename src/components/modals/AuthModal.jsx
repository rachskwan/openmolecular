import { useState, useEffect } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function AuthModal({ isOpen, onClose, onAuth, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState(null);

  // Reset mode when modal opens with different initialMode
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setAuthError(null);
      setErrors({});
    }
  }, [isOpen, initialMode]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateUsername = (username) => {
    return /^[a-zA-Z0-9_]{3,20}$/.test(username);
  };

  const validateForm = () => {
    const newErrors = {};

    if (mode === 'signup') {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!formData.username.trim()) {
        newErrors.username = 'Username is required';
      } else if (!validateUsername(formData.username)) {
        newErrors.username = '3-20 characters, letters, numbers, underscores only';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setAuthError(null);

    try {
      if (mode === 'signup') {
        // Sign up with Supabase
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              name: formData.name,
              username: formData.username,
            }
          }
        });

        if (error) throw error;

        if (data.user) {
          const userData = {
            id: data.user.id,
            name: formData.name,
            email: formData.email,
            username: formData.username,
            isLoggedIn: true,
            createdAt: new Date().toISOString(),
          };
          onAuth(userData);
          onClose();
        }
      } else {
        // Sign in with Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) throw error;

        if (data.user) {
          const userData = {
            id: data.user.id,
            name: data.user.user_metadata?.name || formData.email.split('@')[0],
            email: data.user.email,
            username: data.user.user_metadata?.username || formData.email.split('@')[0],
            isLoggedIn: true,
            createdAt: data.user.created_at,
          };
          onAuth(userData);
          onClose();
        }
      }
    } catch (error) {
      console.error('Auth error:', error);
      setAuthError(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const switchMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    setErrors({});
    setAuthError(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-teal-500 to-emerald-600 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
            <span className="font-semibold text-lg">OpenMolecular</span>
          </div>

          <h2 className="text-2xl font-bold">
            {mode === 'login' ? 'Welcome back!' : 'Create your account'}
          </h2>
          <p className="text-teal-100 mt-1">
            {mode === 'login'
              ? 'Sign in to continue your learning journey'
              : 'Join thousands learning about metabolomics'
            }
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Auth Error Display */}
          {authError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{authError}</p>
            </div>
          )}

          {mode === 'signup' && (
            <>
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your name"
                    className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Username Field */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Username
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">@</span>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value.toLowerCase())}
                    placeholder="Choose a username"
                    className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                      errors.username ? 'border-red-300 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                )}
              </div>
            </>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                  errors.email ? 'border-red-300 bg-red-50' : 'border-slate-300'
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder={mode === 'login' ? 'Enter your password' : 'Create a password'}
                className={`w-full pl-10 pr-12 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                  errors.password ? 'border-red-300 bg-red-50' : 'border-slate-300'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                {mode === 'login' ? 'Sign In' : 'Create Account'}
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="px-6 pb-6">
          <div className="text-center text-sm text-slate-600">
            {mode === 'login' ? (
              <>
                Don't have an account?{' '}
                <button
                  onClick={switchMode}
                  className="text-teal-600 font-medium hover:text-teal-700"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={switchMode}
                  className="text-teal-600 font-medium hover:text-teal-700"
                >
                  Sign in
                </button>
              </>
            )}
          </div>

          {mode === 'signup' && (
            <div className="mt-4 p-3 bg-teal-50 rounded-lg">
              <p className="text-xs text-teal-700 flex items-start gap-2">
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                By signing up, you'll get personalized learning recommendations and can track your progress across devices.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
