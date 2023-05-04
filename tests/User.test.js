

describe('User class', () => {
    let user;
  
    beforeEach(() => {
      user = new User('testuser', 'password', 20);
    });
  
    it('should have username, password, age, and loggedIn properties initialized correctly', () => {
      expect(user.username).toBe('testuser');
      expect(user.password).toBe('password');
      expect(user.age).toBe(20);
      expect(user.loggedIn).toBe(false);
    });
  
    it('should allow registration if user is over 18 and not already registered', () => {
      expect(user.register()).toBe(true);
      expect(user.register()).toBe(false);
    });
  
    it('should not allow registration if user is under 18', () => {
      user = new User('testuser', 'password', 17);
      expect(user.register()).toBe(false);
    });
  
    it('should not allow login if user is not registered or password is incorrect', () => {
      expect(user.login('wrongpassword')).toBe(false);
      user.register();
      expect(user.login('wrongpassword')).toBe(false);
    });
  
    it('should allow login if user is registered and password is correct', () => {
      user.register();
      expect(user.login('password')).toBe(true);
    });
  
    it('should not allow logout if user is not logged in', () => {
      expect(user.logout()).toBe(false);
    });
  
    it('should allow logout if user is logged in', () => {
      user.register();
      user.login('password');
      expect(user.logout()).toBe(true);
      expect(user.loggedIn).toBe(false);
    });
  });
