import * as vscode from 'vscode';

export interface StorageService {
  name: string;
  isAuthenticated(): boolean;
  login(username: string, password: string): Promise<void>;
  list(): Promise<StorageBlock[]>;
  getStorageBlock(url: string): Promise<StorageBlock>;
  createFile(fileName: string, description: string, text: string, isPrivate?: boolean): Promise<string>;
  editFile(storageBlockId: string, fileName: string, text: string): Promise<void>;
}

export interface StorageBlock {
  id: string;
  label: string;
  description: string;
  url: string;
  files: { [filename: string]: CodeFile };
}

export interface CodeFile {
  content: string;
}