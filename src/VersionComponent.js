import {version} from 'inferno';

function showVersion() {
	alert(`The version is: ${ version }!`);
}

export default function VersionComponent() {
	return (
		<div>
			<p>This is Inferno Boilerplate example using <em>Inferno { version }</em>.</p>
			<button onClick={ showVersion }>Show version</button>
		</div>
	);
}
