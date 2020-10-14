package raudain.MediRest;

public class DatabaseCredentials {
    //static String host = "jws-app-mysql"; // The standard name in Tomcat+ MySQL on openshift
    private static String host = "localhost";

    private static String name = "mydb";
    private static int port = 3306; // This is for MySQL
    private static String universalResourceLocator = "jdbc:mysql://" + host + ":" + port + "/"
        + name;

    private static String user = "user";
    private static String password = "password";

    private static String driver = "com.mysql.cj.jdbc.Driver";

    public DatabaseCredentials() {

    }

    public static String getURL() {
        return universalResourceLocator;
    }

    public static String getUser() {
        return user;
    }

    public static String getPassword() {
        return password;
    }

    public static String getDriver() {
        return driver;
    }

}
