package raudain.MediRest;

import java.io.IOException;
import java.sql.*;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/update.htm")
public class VideoPost extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(final HttpServletRequest request, final HttpServletResponse response) {}
	
	@Override
	protected void doPost(final HttpServletRequest request, final HttpServletResponse response) {
		Video Video = new Video();
		Video.setStaticThumbnail(request.getParameter("thumbnail"));
		Video.setLink(request.getParameter("link"));
		Video.setCaption(request.getParameter("caption"));
		Video.setDate(Integer.parseInt(request.getParameter("date")));
		createVideo(Video);
		
		try {
			response.sendRedirect(request.getContextPath());
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	private void createVideo(Video updatedWorker) {
		final Connection connection = VideoResource.createConnection();

		final String sql = "INSERT INTO `mydb`.`videos` SET `static_thumbnail` = ?, `link` = ?, `caption` =?, `date` =?;";
		final String thumbnail = updatedWorker.getStaticThumbnail();
		final String link = updatedWorker.getLink();
		final String caption = updatedWorker.getCaption();
		final int date = updatedWorker.getDate();
		try {
			// Prepare a statement object using the connection for provided worker room
			PreparedStatement preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, thumbnail);
			preparedStatement.setString(2, link);
			preparedStatement.setString(3, caption);
			preparedStatement.setInt(4, date);
			preparedStatement.executeUpdate();
			connection.close();
		} catch (final SQLException e) {
			e.printStackTrace();
		}
	}
}
