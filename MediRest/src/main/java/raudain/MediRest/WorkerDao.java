package raudain.MediRest;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

/**
 * <br/>
 * CLASS DESCRIPTION: <br/>
 * A Data Access Object (DAO) class for handling and managing event related data
 * requested, updated, and processed in the application and maintained in the
 * database. The interface between the application and event data persisting in
 * the database. <br/>
 *
 * @author Roody Audain
 *
 */
public class WorkerDao {

	// LOGGER for handling all transaction messages in EVENTDAO

	// JDBC API classes for data persistence
	private Connection connection = null;
	private PreparedStatement preparedStatement = null;
	private ResultSet resultSet = null;

	/**
	 * <br/>
	 * METHOD DESCRIPTION: <br/>
	 * DAO for displaying all of the worker names in the worker Table in the
	 * Database <br/>
	 *
	 * PSEUDOCODE: <br/>
	 * Create a new connection to the database. <br/>
	 * Prepare a statement object using the connection that gets all the worker
	 * names from the worker table. <br/>
	 * Execute the SQL statement and keep a reference to the result set.<br/>
	 * Using a WHILE LOOP, store each record in the result set returned in a Worker
	 * object by setting the values of the Event attributes as the corresponding
	 * values in the Result set.<br/>
	 * Return the ArrayList to the calling method. <br/>
	 *
	 * @return Collection of Events
	 *
	 * @throws SQLException
	 *
	 */
	public ArrayList<Worker> getWorkers() {

		Statement statement = null;

		connection = DataConnection.createConnection();

		String sqlScript = "SELECT * FROM workers;";
		try {
			statement = connection.createStatement();
			resultSet = statement.executeQuery(sqlScript);
		} catch (final SQLException e) {
			e.printStackTrace();
			;
		}

		// Now we collect the data from the result in order to display them in
		// the Java Server Page
		ArrayList<Worker> workerList = new ArrayList<Worker>();
		try {
			while (resultSet.next()) {
				
				Worker worker = new Worker();

				short room = resultSet.getShort("room");
				worker.setRoom(room);

				String name = resultSet.getString("name");
				worker.setName(name);

				String profession = resultSet.getString("profession");
				worker.setProfession(profession);

				String endurance = resultSet.getString("endurance");
				worker.setEndurance(endurance);

				byte level = resultSet.getByte("level");
				worker.setLevel(level);

				long cost = resultSet.getLong("cost");
				worker.setCost(cost);

				workerList.add(worker);
			}
		} catch (final SQLException e) {
			System.out.println("Error. Problem reading data: " + e);
		}
		try {
			DataConnection.closeConnection();
		} catch (final SQLException e) {
			System.out.println("Error. Problem with closing connection: " + e);
		}

		return workerList;
	}

	/**
	 * <br/>
	 * METHOD DESCRIPTION: <br/>
	 * DAO for displaying all the workers in the worker Table in the Database <br/>
	 *
	 * PSEUDOCODE: <br/>
	 * Create a new connection to the database. <br/>
	 * Prepare a statement object using the connection that gets all the workers
	 * from the worker table. <br/>
	 * Execute the SQL statement and keep a reference to the result set.<br/>
	 * Return the ArrayList to the calling method. <br/>
	 *
	 * @return Collection of Events
	 *
	 * @throws SQLException
	 *
	 */
	public ArrayList<String> getWorkerNames() {

		Statement statement = null;

		connection = DataConnection.createConnection();

		try {
			statement = connection.createStatement();
		} catch (final SQLException e) {
			System.out.println("Error. Can not create the statement: " + e);
		}

		final String searchString = "SELECT name FROM workers;";
		try {
			resultSet = statement.executeQuery(searchString);
		} catch (final SQLException e) {
			System.out.println("Error. Problem with executeQuery: " + e);
		}

		// Now we collect the data from the result in order to display them in
		// the Java Server Page

		ArrayList<String> namesList = new ArrayList<String>();
		try {
			while (resultSet.next()) {
				String name = resultSet.getString("name");
				namesList.add(name);
			}
		} catch (final SQLException e) {
			System.out.println("Error. Problem reading data: " + e);
		}
		try {
			DataConnection.closeConnection();
		} catch (final SQLException e) {
			System.out.println("Error. Problem with closing connection: " + e);
		}
		return namesList;
	}

	/**
	 * <br/>
	 * METHOD DESCRIPTION: <br/>
	 * DAO for displaying all the workers in the worker Table in the Database <br/>
	 *
	 * PSEUDOCODE: <br/>
	 * Create a new connection to the database. <br/>
	 * Prepare a statement object using the connection that gets all the workers
	 * from the worker table. <br/>
	 * Execute the SQL statement and keep a reference to the result set.<br/>
	 * Return the ArrayList to the calling method. <br/>
	 *
	 * @return Collection of Events
	 * 
	 * @throws SQLException
	 *
	 */
	public Worker getWorker(short room) {

		connection = DataConnection.createConnection();
		final String searchString = "SELECT * FROM workers WHERE room=?;";
		Worker worker = new Worker();
		try {
			preparedStatement = connection.prepareStatement(searchString);
			preparedStatement.setShort(1, room);
			resultSet = preparedStatement.executeQuery();

			// Now we collect the data from the result in order to display them in
			// the Java Server Page

			while (resultSet.next()) {
				worker.setRoom(room);

				String name = resultSet.getString("name");
				worker.setName(name);

				String profession = resultSet.getString("profession");
				worker.setProfession(profession);

				String endurance = resultSet.getString("endurance");
				worker.setEndurance(endurance);

				byte level = resultSet.getByte("level");
				worker.setLevel(level);

				long cost = resultSet.getLong("cost");
				worker.setCost(cost);
			}
			DataConnection.closeConnection();
		} catch (final SQLException exception) {
			System.out.println(exception.getMessage());
		}
		return worker;
	}

	/**
	 * This method updates a worker
	 *
	 * PSEUDOCODE: <br/>
	 * Create a new connection to the database. <br/>
	 * Prepare a statement object using the connection that get a worker from the
	 * worker table for provided worker id. <br/>
	 * Execute the SQL statement and keep a reference to the result set. <br/>
	 * Update the event object by calling getUpdateEventSession method Event is
	 * updated in database. <br/>
	 *
	 * @param A worker that need to be updated
	 * @return void
	 */
	public void updateWorker(Worker updatedWorker) {

		// Create a new connection to the database
		connection = DataConnection.createConnection();

		String sqlScript = "UPDATE `mydb`.`workers` SET `name` = ?, `profession` = ?, `endurance` = ?, `level` = ?, `cost` = ? WHERE (`room` = ?);";
		short room = updatedWorker.getRoom();
		String name = updatedWorker.getName();
		String profession = updatedWorker.getProfession();
		String endurance = updatedWorker.getEndurance();
		Byte level = updatedWorker.getLevel();
		Long cost = updatedWorker.getCost();
		try {
			// Prepare a statement object using the connection for provided worker room
			preparedStatement = connection.prepareStatement(sqlScript);
			preparedStatement.setString(1, name);
			preparedStatement.setString(2, profession);
			preparedStatement.setString(3, endurance);
			preparedStatement.setByte(4, level);
			preparedStatement.setLong(5, cost);
			;
			preparedStatement.setInt(6, room);
			preparedStatement.executeUpdate();
			connection.close();
		} catch (final SQLException e) {
			e.printStackTrace();
		}
	}

	public Object createWorker(Worker worker) {
		// TODO Auto-generated method stub
		return null;
	}

	public void delete(Short room) {
		// TODO Auto-generated method stub

	}
}
