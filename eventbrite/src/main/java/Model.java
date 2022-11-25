public class Model {
    private String uname;
    private String email;
    private String password;
    private String cpassword;
    public String getUname() {
        return uname;
    }
    public void setUname(String uname) {
        this.uname = uname;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getCpassword() {
        return cpassword;
    }
    public void setCpassword(String cpassword) {
        this.cpassword = cpassword;
    }
    public Model(String uname, String email, String password, String cpassword) {
        this.uname = uname;
        this.email = email;
        this.password = password;
        this.cpassword = cpassword;
    }

}
