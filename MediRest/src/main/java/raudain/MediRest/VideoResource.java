package raudain.MediRest;

import java.sql.*;
import java.util.*;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("videos")
public class VideoResource {

	@GET
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public List<Video> getVideos() {
		final ArrayList<Video> videoList = new ArrayList<Video>();
		final Connection connection = createConnection();
		try {
			final String query = "SELECT * FROM mydb.videos ORDER BY date DESC;";
			final Statement statement = connection.createStatement();
			final ResultSet resultSet = statement.executeQuery(query);
			while (resultSet.next()) {
				final Video video = new Video();
				video.setLink(resultSet.getString("link"));
				video.setStaticThumbnail(resultSet.getString("staticThumbnail"));
				video.setCaption(resultSet.getString("caption"));
				video.setDate(resultSet.getInt("date"));
				video.setAnimatedThumbnail(resultSet.getString("animatedThumbnail"));
				videoList.add(video);
			}
			connection.close();
		} catch (final SQLException e) {
			e.printStackTrace();
		}
		return videoList;
	}

	@POST
	@Consumes({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public Video createVideo(Video video) {
		String sql = "INSERT INTO `mydb`.`videos` SET `staticThumbnail` = ?, `link` = ?, `caption` =?, `date` =?;";
		final Connection connection = createConnection();
		try {
			PreparedStatement st = connection.prepareStatement(sql);
			st.setString(1, video.getStaticThumbnail());
			st.setString(2, video.getLink());
			st.setString(3, video.getCaption());
			st.setInt(4, video.getDate());
			st.executeUpdate();
		} catch (final SQLException exception) {
			exception.printStackTrace();
		}

		return video;
	}

	@DELETE
	@Path("/{caption}")
	public String deleteVideo(@PathParam("caption") String caption) {
		String sql = "DELETE FROM `mydb`.`videos` WHERE (`caption` = ?);";
		final Connection connection = createConnection();
		try {
			PreparedStatement st = connection.prepareStatement(sql);
			st.setString(1, caption);
			st.executeUpdate();
		} catch (final SQLException exception) {
			exception.printStackTrace();
		}
		return caption;
	}
	
	public static Connection createConnection() {
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
