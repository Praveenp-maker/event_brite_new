/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.37
 * Generated at: 2022-11-25 10:05:50 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<!DOCTYPE html>\r\n");
      out.write("<html lang=\"en\">\r\n");
      out.write("<head>\r\n");
      out.write("    <meta charset=\"UTF-8\">\r\n");
      out.write("    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n");
      out.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n");
      out.write("    <link rel=\"stylesheet\" type=\"text/css\" href=\"Style.css\">\r\n");
      out.write("    <script src=\"index2.js\"></script>\r\n");
      out.write("    <style>\r\n");
      out.write("        /* body {\r\n");
      out.write("          background-image: url(\"images/backgroud\\ image.jpg\");\r\n");
      out.write("          background-size: cover;\r\n");
      out.write("          width: 50px;\r\n");
      out.write("          height: 50px;\r\n");
      out.write("        } */\r\n");
      out.write("        </style>\r\n");
      out.write("    <title>Document</title>\r\n");
      out.write("    <link rel=\"icon\" type=\"image/x-icon\" href=\"images/icon.jpg\">\r\n");
      out.write("</head>\r\n");
      out.write("<body >\r\n");
      out.write("<!-- <a href=\"login.html\" style=\"color: white;right: auto;\" >login</a>\r\n");
      out.write("<a href=\"signup.html\">signup</a> -->\r\n");
      out.write("<div class=\"container\">\r\n");
      out.write("    <div class=\"header\">\r\n");
      out.write("        <img src=\"images/logo1.png\" class=\"logo\">\r\n");
      out.write("         <nav>\r\n");
      out.write("            <ul>\r\n");
      out.write("                <li><a href=\"\">Home</a></li>\r\n");
      out.write("                <li><a href=\"\">Products</a></li>\r\n");
      out.write("                <li><a href=\"\">Community</a></li>\r\n");
      out.write("                <li><a href=\"\">Contact</a></li>\r\n");
      out.write("            </ul>\r\n");
      out.write("        </nav>\r\n");
      out.write("        <!-- <a href=\"login.html\">login</a> -->\r\n");
      out.write("        <button type=\"submit\" onclick=\"login()\" class=\"btn\" id=\"btn1\">Log In</button>\r\n");
      out.write("        <button type=\"submit\" onclick=\"sign()\" class=\"btn\" id=\"btn2\" >Sign Up</button>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"content\">\r\n");
      out.write("        <div class=\"text\">\r\n");
      out.write("        <h1>Be Young, Have Fun, <br> <span>Now is your Time</span></h1>\r\n");
      out.write("        <p>Eventbrite brings people together through live experiences. <br>Discover events that match your passions, or create your own with online ticketing tools.\r\n");
      out.write("        </p>\r\n");
      out.write("        <button class=\"btn3\">Buy Now</button>\r\n");
      out.write("       </div>\r\n");
      out.write("    <div class=\"pepsi\">\r\n");
      out.write("    <!-- <img src=\"images/landing pages.jpg\" alt=\"\"> -->\r\n");
      out.write("    </div>\r\n");
      out.write("   </div>\r\n");
      out.write("</div>\r\n");
      out.write("</body>\r\n");
      out.write("</html>\r\n");
      out.write("<!-- <html>\r\n");
      out.write("<body>\r\n");
      out.write("<h2>wecome to all!</h2>\r\n");
      out.write("<a href=\"login.html\">login</a>\r\n");
      out.write("<a href=\"signup.html\">signup</a>\r\n");
      out.write("</body>\r\n");
      out.write("</html> -->\r\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}