import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.stream.Collectors;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
@WebServlet("/login")
public class Login extends HttpServlet{
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String jdbcURL = "jdbc:mysql://localhost:3306/eventsdb?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC";
        String jdbcUsername = "root";
        String jdbcPassword = "";
        try (Connection con = DriverManager.getConnection(jdbcURL,jdbcUsername,jdbcPassword)) {
             String username=req.getParameter("username");
             String password=req.getParameter("password");
             System.out.println(username);
             System.out.println(password);
             String qry="select uname,password from signup where uname=? AND password=?";
               PreparedStatement pstmt=con.prepareStatement(qry);
               pstmt.setString(1, username);
               pstmt.setString(2, password);
               ResultSet h=pstmt.executeQuery();
               boolean s=h.next();
               System.out.println(s);
             if(s==true){
                resp.sendRedirect("usertype.html");
             }
else{
    resp.sendRedirect("login.html");
}
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

        @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String jdbcURL = "jdbc:mysql://localhost:3306/eventsdb?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC";
        String jdbcUsername = "root";
        String jdbcPassword = "";
        System.out.println("post login called");
        String requestData = req.getReader().lines().collect(Collectors.joining());
        Gson g = new Gson();
        Model newBook = g.fromJson(requestData, Model.class);
        try(Connection conn=DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword)){
            String uname= newBook.getUname();
            String email=newBook.getEmail();
            String password=newBook.getPassword();
            String cpassword=newBook.getCpassword();
            System.out.println(uname+" "+email+" "+password+" "+cpassword);
            String qry="insert into signup values(?,?,?,?)";


         PreparedStatement pstmt=conn.prepareStatement(qry);

        pstmt.setString(1, uname);
        pstmt.setString(2, email);
        pstmt.setString(3, password);
        pstmt.setString(4,cpassword);
        
        
        

        

         int rs=pstmt.executeUpdate();
       
      
} 
        
    catch(SQLException e)
{
    e.printStackTrace();
}    }
    }
    

