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
		ResultSet resultSet = null;
		Connection connection = DataConnection.createConnection();
		try {
			Statement statement = connection.createStatement();
			String query = "SELECT * FROM mydb.videos ORDER BY date DESC;";
			resultSet = statement.executeQuery(query);
		} catch (final SQLException e) {
			e.printStackTrace();
			;
		}

		ArrayList<Video> videoList = new ArrayList<Video>();
		try {
			while (resultSet.next()) {
				
				Video video = new Video();

				String link = resultSet.getString("link");
				video.setLink(link);

				String thumbnail = resultSet.getString("thumbnail");
				video.setThumbnail(thumbnail);

				String caption = resultSet.getString("caption");
				video.setCaption(caption);

				int date = resultSet.getInt("date");
				video.setDate(date);

				videoList.add(video);
			}
		} catch (final SQLException e) {
			System.out.println("Error. Problem reading data: " + e);
		}
		try {
			DataConnection.closeConnection();
		} catch (final SQLException e) {
			System.out.println("Error. Problem with closing connection: " + e);
		}

		return videoList;
	}
}
