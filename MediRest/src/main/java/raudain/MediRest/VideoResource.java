package raudain.MediRest;

import java.sql.*;
import java.util.*;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("workers")
public class VideoResource {
	
	@GET
	@Produces(MediaType.APPLICATION_XML)
	public List<Video> getVideos() {
		
		final ArrayList<Video> videoList = new ArrayList<Video>();
		final Connection connection = createConnection();
		try {
			final ResultSet resultSet = connection.createStatement().executeQuery("SELECT * FROM mydb.videos ORDER BY date DESC;");
			while (resultSet.next()) {
				final Video video = new Video();
				video.setLink(resultSet.getString("link"));
				video.setStaticThumbnail(resultSet.getString("static_thumbnail"));
				video.setCaption(resultSet.getString("caption"));
				video.setDate(resultSet.getInt("date"));
				videoList.add(video);
			}
			connection.close();
		} catch (final SQLException e) {
			e.printStackTrace();
		}
		return videoList;
	}
	
	private static Connection createConnection() {
		
		try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (final ClassNotFoundException exception) {
        	exception.printStackTrace();
        }
        Connection connection = null;
        try {
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "user", "password");
        } catch (final SQLException exception) {
        	exception.printStackTrace();
        } 
		return connection;
	}
}
