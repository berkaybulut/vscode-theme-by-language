import * as vscode from 'vscode';
import { removeThemeForLanguage, applyDefaultTheme } from '../configuration';

export function createUseDefaultThemeForCurrentFileLanguageCommand() {
    const command = vscode.commands.registerCommand('theme-by-language.useDefaultThemeForCurrentFileLanguage', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            var languageId = editor.document.fileName;
            languageId = languageId.split('.').pop();
            removeThemeForLanguage(languageId).then(() => applyDefaultTheme());
        }
    });

    return command;
}
